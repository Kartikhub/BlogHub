import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading) {
        return <div>
            loading ......
        </div>
    }


    return <div className="flex flex-col">
        <AppBar name="Kartik Sharma" />
        <div className="flex justify-center">
            <div className="w-1/2 min-w-96 flex flex-col justify-center">
                {blogs.map(blog => <BlogCard key={blog.id}
                    id = {blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    date="Jun 8, 2024"
                    title={blog.title}
                    content={blog.content}
                /> )}
                
            </div>

        </div>
    </div>

}