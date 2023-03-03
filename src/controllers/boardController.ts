import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getBoards = async (req, res, next) => {
    let board
    try {
        board = await prisma.board.findMany()
    } catch (err) {
        return next(err)
    }
    res.status(200).json({
        message: 'Boards fetched',
        users: board,
    })
}
export const getBoardByID = async (req, res, next) => {
    const id = Number(req.params.id)
    let board
    try {
        board = await prisma.board.findUnique({
            where: {
                id,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({
        user: board,
    })
}
export const createBoard = async (req, res, next) => {
    const { name, email } = req.body
    let result
    try {
        result = await prisma.board.create({
            data: {
                name,
                user: { connect: { email } },
            },
        })
    } catch (err) {
        return next(err)
    }

    res.status(200).json({ message: 'Board created!', result: result })
}
export const deleteBoard = async (req, res, next) => {
    const id = Number(req.params.id)
    try {
        await prisma.board.delete({
            where: {
                id,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({ message: 'Board deleted' })
}
