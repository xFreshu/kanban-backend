export const getUsers = (req, res) => {
    res.send('user from controller')
}

export const getUserByID = (req, res) => {
    res.send('user :id from controller')
}

export const updateUser = (req, res) => {
    res.send('user patch from controller')
}

export const deleteUser = (req, res) => {
    res.send('user delete from controller')
}
