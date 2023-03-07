import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET)
}

export const verifyToken = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        return res.status(401).json({ message: 'No token provided' })
    }

    const [, token] = bearer.split(' ')

    if (!token) {
        return res.status(401).json({ message: 'No token provided' })
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}
