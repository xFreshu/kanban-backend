import * as bcrypt from 'bcrypt'

export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 5)
}
