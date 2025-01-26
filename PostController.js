import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async createPost(req, res) {
    try {
      const post = await PostService.createPost(req.body)
      return res.status(200).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getPosts(req, res) {
    try {
      const posts = await PostService.getPosts()
      return res.status(200).json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async getPost(req, res) {
    try {
      const post = await PostService.getPost(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async updatePost(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body)
      return res.json(updatedPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  async deletePost(req, res) {
    try {
      const post = await PostService.deletePost(req.params.id)
      return res.json(post)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

export default new PostController();