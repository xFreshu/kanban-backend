import { Router } from 'express'
import {
    getUsers,
    getUserByID,
    deleteUser,
    updateUser,
    createUser,
} from '../controllers/userController'
const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserByID)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
