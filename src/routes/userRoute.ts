import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('test')
})
router.get('/:id', (req, res) => {
    res.send('id')
})
router.patch('/:id', (req, res) => {
    res.send('patch')
})
router.delete('/:id', (req, res) => {
    res.send('patch')
})
export default router
