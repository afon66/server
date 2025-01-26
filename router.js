import Router from 'express'
import Post from './Post.js';
import PostController from './PostController.js';

const router = new Router()

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.getPosts)
router.get('/posts/:id', PostController.getPost)
router.put('/posts', PostController.updatePost)
router.delete('/posts/:id', PostController.deletePost)

export default router;