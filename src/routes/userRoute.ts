import { Router } from 'express'
import {
    getUsers,
    getUserByID,
    deleteUser,
    updateUser,
} from '../controllers/userController'
const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserByID)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
