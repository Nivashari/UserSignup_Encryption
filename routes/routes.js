import express from 'express'
import Controller from '../controllers/Controller.js'
import { test_middleware } from '../middlewares/test_middleware.js'

const router = express.Router()

router.use( test_middleware) 

router.get("/dashboard",Controller.dashboard_get)

router.get("/test", Controller.test_get )


router.get("/signup",Controller.signup_get)

router.post("/signup",Controller.signup_post)

router.get('/login',Controller.login_get)

router.post('/login',Controller.login_post)


export default router