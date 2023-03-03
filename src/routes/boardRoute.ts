import { Router } from 'express'
import {
    getBoards,
    getBoardByID,
    deleteBoard,
    createBoard,
} from '../controllers/boardController'

const router = Router()

router.get('/', getBoards)
router.get('/:id', getBoardByID)
router.post('/', createBoard)
router.delete('/:id', deleteBoard)

export default router
