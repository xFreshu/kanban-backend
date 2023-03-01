import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = (req, res) => {
    res.send('user from controller')
}

export const getUserByID = (req, res) => {
    res.send('user :id from controller')
}

export const createUser = async (req, res, next) => {
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
            password: password,
            companyName: companyName,
            board: board,
        },
    })
    res.status(201).json({
        message: 'User created',
        user: user,
    })
}

export const updateUser = (req, res) => {
    res.send('user patch from controller')
}

export const deleteUser = (req, res) => {
    res.send('user delete from controller')
}
