import { Post } from '../models/Post.js'
import { Step } from '../models/Step.js'
import { Coment } from '../models/Coment.js'

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll()
        res.json(posts)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    try{
        const post = await Post.create(req.body)
        res.json(post)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    try{
        const { id } = req.params
        const post = await Post.findByPk(id)
        await post.set(req.body)
        res.json(post)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const deletePost = async (req, res) => {
    try{
        const { id } = req.params
        await Post.destroy({where: {id}})
        res.status(204).json({status: 'success'})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getPost = async (req, res) =>{
    try{
        const { id } = req.params
        const post = await Post.findByPk(id)
        res.json(post)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getPostSteps = async (req, res) =>{
    try{
        const { id } = req.params
        const steps = await Step.findAll({where: {postId: id}})
        res.json(steps)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}
export const getPostComents = async (req, res) =>{
    try{
        const { id } = req.params
        const coments = await Coment.findAll({where: {postId: id}})
        res.json(coments)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}