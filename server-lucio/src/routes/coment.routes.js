import { Router } from 'express'
import { getComents, createComent, updateComent, deleteComent , getComent} from '../controller/coment.controller.js'
const router = Router()

router.get('/coments', getComents)
router.post('/coments', createComent)
router.put('/coments/:id', updateComent)
router.delete('/coments/:id', deleteComent)
router.get('/coments/:id', getComent)

export default router