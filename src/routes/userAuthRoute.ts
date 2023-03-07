import { Router } from 'express'
import { createUser, loginUser } from '../controllers/userController'
import { check } from 'express-validator'
const router = Router()

router.post(
    '/',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a valid password').isLength({
            min: 6,
        }),
        check('companyName', 'Please enter a valid company name').isLength({
            min: 2,
        }),
    ],
    createUser
)
router.post('/login', loginUser)

export default router
