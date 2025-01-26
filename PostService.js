import Post from "./Post.js"

class PostService {
  async createPost(post) {
    const createdPost = await Post.create(post)
    return createdPost
  }
  async getPosts() {
    const posts = await Post.find()
    return posts
  }
  async getPost(id) {
    // const { id } = req.params
    if (!id) {
      throw new Error('не указан ID')
      // res.status(400).json({ message: 'Id не указан' })
    }
    const post = await Post.findById(id)
    // return res.json(post)
    return post
  }
  async updatePost(post) {
    if (!post._id) {
      throw new Error({ message: 'Id не указан' })
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
    return updatedPost
  }
  async deletePost(id) {
    if (!id) {
      throw new Error({ message: 'Id не указан' })
    }
    const post = await Post.findByIdAndDelete(id)
    return post
  }
}

export default new PostService()