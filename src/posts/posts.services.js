const postControllers= require('../posts/posts.controllers')

const getAllPost= (req,res)=>{
    postControllers.findAllPosts()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

const getPostById=(req,res)=>{
    const id=Number (req.params.id)

    postControllers.findPostById(id)
    .then(data=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message:'Post not found, sorry:('})
        }
        
    })

    .catch(error=>{
        res.status(400).json(error)
    })
}

const createNewPost= (req,res)=>{
    const postObj=req.body
    postControllers.createPost(postObj)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

const patchPost= (req,res)=>{
    const id = req.params.id;
    const postObj= req.body;

    postControllers.updatePost(id,postObj)
    .then(data=>{
        if(data){
            res.status(200).json({message:'Your post was sucessfully update :)'})
        }else{
            res.status(400).json({message:'Post not found, try again'})
        }
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

const deletePost=(req,res)=>{
    id=req.params.id

    postControllers.deletePost(id)
    .then(data=>{
        if(data){
            res.status(200).json({message:'Your post was sucessfully update :)'})
        }else{
            res.status(400).json({message:'Post not found, try again'})
        }
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

module.exports={
    getAllPost,
    getPostById,
    createNewPost,
    patchPost,
    deletePost
}