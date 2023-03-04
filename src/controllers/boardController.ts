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
    const id = Number(req.params.id)
    const { name, email } = req.body
    console.log(id)
    let userBoards
    try {
        userBoards = await prisma.board.findMany({
            where: {
                userId: id,
            },
        })
    } catch (err) {
        return next(err)
    }

    if (userBoards.some((board) => board.name === name)) {
        return res.status(400).json({
            message: 'Board already exists',
        })
    }

    let newBoard
    try {
        newBoard = await prisma.board.create({
            data: {
                name,
                user: { connect: { id } },
            },
        })
    } catch (err) {
        return next(err)
    }

    res.status(200).json({ message: 'Board created!', result: newBoard })
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
export const getBoardByUserID = async (req, res, next) => {
    const id = Number(req.params.id)
    let board
    try {
        board = await prisma.board.findMany({
            where: {
                userId: id,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({
        board,
    })
}

//remove all boards
export const deleteAllBoards = async (req, res, next) => {
    try {
        await prisma.board.deleteMany()
    } catch (err) {
        return next(err)
    }
    res.status(200).json({ message: 'All boards deleted' })
}
