import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogPage } from "../components/BlogPage";
import { Spinner } from "../components/Spinner";
import { AppBarSkeleton } from "../components/AppBarSkeleton";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading || !blog) {
        return <div className="flex flex-col h-screen">
            <AppBarSkeleton />
            <div className="flex justify-center h-full">
            <div className="flex flex-col justify-center">
               <Spinner />
            </div>
            </div>
        </div>
    }

    return <div>
        <BlogPage blog={blog} />
    </div>
}