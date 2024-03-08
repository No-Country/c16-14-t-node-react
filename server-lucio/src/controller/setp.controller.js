import { Step } from '../models/Step.js'

export const getSteps = async(req,res)=>{
    try{
        const steps = await Step.findAll()
        res.json(steps)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}
export const createStep = async(req,res)=>{
    try{
        const newStep = await Step.create(req.body)
        res.json(newStep)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}
export const updateStep = async(req,res)=>{
    try{
        const { id } = req.params
        const step = await Step.findByPk(id)
        await step.set(req.body)
        res.json(step)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}
export const deleteStep = async(req,res)=>{
    try{
        const { id } = req.params
        await Step.destroy({where: {id}})
        res.status(204).json({status: 'success'})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}
export const getStep = async(req,res)=>{
    try{
        const { id } = req.params
        const step = await Step.findByPk(id)
        res.json(step)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}