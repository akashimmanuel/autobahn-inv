import axios from "axios";

class PostService {

    public async fetchPost(): Promise<any> {
        return await (await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1&&_limit=8')).data
    }

    public async addPost(post: any) {
        delete post.id
        return await axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify({
            ...post,
            userId: 1,
        }))
    }

    public async editPost(post: any) {
        return await axios.patch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, JSON.stringify(post))
    }

    public async deletePost(id: any) {
        return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }
}
export default PostService;