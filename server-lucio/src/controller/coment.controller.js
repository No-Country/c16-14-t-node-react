import { Coment } from '../models/Coment.js'

export const getComents = async(req,res)=>{
    try{
        const coments = await Coment.findAll()
        res.json(coments)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const createComent = async(req,res)=>{
    try{
        const newComent = await Coment.create(req.body)
        res.json(newComent)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const updateComent = async(req,res)=>{
    try{
        const { id } = req.params
        const coment = await Coment.findByPk(id)
        await coment.set(req.body)
        res.json(coment)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const deleteComent = async(req,res)=>{
    try{
        const { id } = req.params
        await Coment.destroy({where: {id}})
        res.status(204).json({status: 'success'})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getComent = async(req,res)=>{
    try{
        const { id } = req.params
        const coment = await Coment.findByPk(id)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}