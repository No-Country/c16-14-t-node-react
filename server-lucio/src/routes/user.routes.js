import { Router } from 'express'
import { getUsers, createUser, updateUser, deleteUser , getUser, getUserPosts, getUserComents } from '../controller/user.controller.js'

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUser)

router.get('/users/:id/posts', getUserPosts)
router.get('/users/:id/coments', getUserComents)

export default router