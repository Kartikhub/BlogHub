import { AppBar } from "../components/AppBar"
import { AppBarSkeleton } from "../components/AppBarSkeleton";
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading) {
        return <div>
            <AppBarSkeleton />
            <div className="flex justify-center">
            <div className="w-1/2 min-w-96 flex flex-col justify-center">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
        </div>
        </div>
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