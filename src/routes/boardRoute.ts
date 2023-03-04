import { Router } from 'express'
import {
    getBoards,
    getBoardByID,
    deleteBoard,
    createBoard,
    getBoardByUserID,
    deleteAllBoards,
} from '../controllers/boardController'

const router = Router()

router.get('/', getBoards)
router.get('/:id', getBoardByID)
router.get('/user/:id', getBoardByUserID)
router.post('/user/:id', createBoard)
router.delete('/:id', deleteBoard)
router.delete('/user/:id', deleteAllBoards)

export default router
