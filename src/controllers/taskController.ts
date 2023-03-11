import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTasks = async (req, res, next) => {
    let tasks
    try {
        tasks = await prisma.task.findMany()
    } catch (err) {
        return next(err)
    }
    res.status(200).json({ tasks })
}
export const getTaskByID = async (req, res, next) => {
    const id = Number(req.params.id)
    let task
    try {
        task = prisma.task.findUnique({
            where: {
                id,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({ task })
}
export const addTask = async (req, res, next) => {
    const {
        title,
        author,
        dataDue,
        status,
        priority,
        env,
        description,
        boardId,
        userId,
    } = req.body
    let task
    try {
        task = await prisma.task.create({
            data: {
                title,
                description,
                author,
                dataDue,
                status,
                priority,
                env,
                board: { connect: { id: boardId } },
                user: { connect: { id: userId } },
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(201).json({ task })
}
export const updateTask = async (req, res) => {}
export const deleteTask = async (req, res) => {}
