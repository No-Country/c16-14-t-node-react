import { Router } from 'express'
import { getSteps, createStep, updateStep, deleteStep , getStep} from '../controller/setp.controller.js'
const router = Router()

router.get('/steps', getSteps)
router.post('/steps', createStep)
router.put('/steps/:id', updateStep)
router.delete('/steps/:id', deleteStep)
router.get('/steps/:id', getStep)

export default router