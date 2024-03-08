import { User } from '../models/User.js'
import { Post } from '../models/Post.js'
import { Coment } from '../models/Coment.js'

export const getUsers = async (req, res) =>{
    try{
        const users = await User.findAll()
        res.json(users)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const createUser = async (req, res) =>{
    try{
        const newUser = await User.create(req.body)
        res.json(newUser)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res) =>{
    try{
        const { id } = req.params
        const user = await User.findByPk(id)
        await user.set(req.body)
        res.json(user)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res) =>{
    try{
        const { id } = req.params
        await User.destroy({where: {id}})
        res.sendStatus(204)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getUser = async (req, res) =>{
    try{
        const { id } = req.params
        const user = await User.findByPk(id)
        res.json(user)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getUserPosts = async (req, res) =>{
    try{
        const { id } = req.params
        const posts = await Post.findAll({where: {userId: id}})
        res.json(posts)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getUserComents = async (req, res) =>{
    try{
        const { id } = req.params
        const coments = await Coment.findAll({where: {userId: id}})
        res.json(coments)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}