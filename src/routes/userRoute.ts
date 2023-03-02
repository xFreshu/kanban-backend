import { Router } from 'express'
import {
    getUsers,
    getUserByID,
    deleteUser,
    updateUser,
    createUser,
    loginUser,
} from '../controllers/userController'
const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserByID)
router.post('/', createUser)
router.post('/login', loginUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
