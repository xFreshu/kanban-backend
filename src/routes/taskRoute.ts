import { Router } from 'express'
import {
    getTasks,
    getTaskByID,
    addTask,
    updateTask,
    deleteTask,
} from '../controllers/taskController'

const router = Router()

router.get('/', getTasks)
router.get('/:id', getTaskByID)
router.post('/', addTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)
export default router
