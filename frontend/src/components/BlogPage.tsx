import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const BlogPage = ({ blog }: { blog: Blog }) => {
    const authorName = blog.author.name || "Anonymous";
    return <div>
        <AppBar name={authorName} />
        <div className="grid grid-cols-12 gap-16 w-screen pt-10 px-16">
            <div className="col-span-8 pl-4">
                <div className="text-4xl font-extrabold">
                    {blog.title}
                </div>
                <div className="pt-3 text-slate-400 text-sm">
                    Posted on 11th December 2024
                </div>
                <div className="pt-6 text-zinc7500">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-xs font-medium">
                    Author
                </div>
                <div className="flex pt-2">
                    <div className="flex flex-col justify-center pr-3">
                        <Avatar size="l" name={authorName} />
                    </div>
                    <div>
                        <div className="text-lg font-bold">
                            {authorName}
                        </div>
                        <div className="text-sm text-slate-400">
                            I am an avid reader and passionate writer who has dedicated her life to the exploration of diverse literary worlds.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}