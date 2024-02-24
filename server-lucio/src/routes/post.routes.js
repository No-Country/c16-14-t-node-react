import { Router } from 'express'
import { getPosts, createPost, updatePost, deletePost , getPost, getPostSteps, getPostComents} from '../controller/post.controller.js'
const router = Router()

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)
router.get('/posts/:id', getPost)

router.get('/posts/:id/steps', getPostSteps)
router.get('/posts/:id/coments', getPostComents)
export default router