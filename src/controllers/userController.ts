import { PrismaClient } from '@prisma/client'
import { comparePassword, hashPassword } from '../middleware/userPassword'

const prisma = new PrismaClient()

export const getUsers = async (req, res, next) => {
    let users
    try {
        users = await prisma.user.findMany()
    } catch (err) {
        return next(err)
    }
    res.status(200).json({
        message: 'Users fetched',
        users: users,
    })
}

export const getUserByID = async (req, res, next) => {
    const id = Number(req.params.id)
    let user
    try {
        user = await prisma.user.findUnique({
            where: {
                id,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({
        user: user,
    })
}

export const createUser = async (req, res) => {
    const { email, password, companyName, board } = req.body
    // validate existing user
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    if (existingUser) {
        return res.status(400).json({
            message: 'User already exists',
        })
    }
    // create user
    const user = await prisma.user.create({
        data: {
            email: email,
            password: await hashPassword(password),
            companyName: companyName,
            board: board,
        },
    })
    res.status(201).json({
        message: 'User created',
        user,
    })
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })
    if (!existingUser) {
        return res.status(400).json({
            message: 'User does not exist',
        })
    }
    const isValid = await comparePassword(password, existingUser.password)
    if (!isValid) {
        res.status(401).json({ message: 'Invalid password' })
    }
    res.status(200).json({
        message: 'User logged in',
        user: existingUser,
    })
}

export const updateUser = async (req, res, next) => {
    const { email } = req.body
    const id = Number(req.params.id)
    let updatedUser
    try {
        updatedUser = await prisma.user.update({
            where: {
                id,
            },
            data: {
                email,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({
        message: 'Updated',
        updatedUser,
    })
}

export const deleteUser = async (req, res, next) => {
    const id = Number(req.params.id)
    try {
        await prisma.user.delete({
            where: {
                id,
            },
        })
    } catch (err) {
        return next(err)
    }
    res.status(200).json({ message: 'User deleted' })
}
