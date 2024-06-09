import { Link } from "react-router-dom"

interface BlogCardProps {
    id: string,
    authorName: string,
    date: string,
    title: string,
    content: string
}

export const BlogCard = ({
    id,
    authorName,
    date,
    title,
    content
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="flex flex-col justify-center max-w-4xl pt-5 mx-3 border-b cursor-pointer">
            <div className="flex flex-row gap-1 pb-2">
                <div className="flex flex-col justify-center">
                    <Avatar name={authorName} />
                </div>
                <Dot />
                <div className="flex flex-col text-neutral-500 font-medium justify-center text-xs">
                    {authorName}
                </div>
                <Dot />
                <div className="flex flex-col justify-center text-slate-400 text-xs">
                    {date}
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-xl font-bold">
                    {title}
                </div>
                <div className="pt-2 line-clamp-3 md:line-clamp-4 text-sm text-neutral-500 font-medium">
                    {content}
                </div>
                <div className="text-zinc-400 text-xs font-light pt-4 pb-2">
                    {Math.ceil(content.split(/\s+/).length / 200) + ' minute(s) read'}
                </div>
            </div>
        </div>
    </Link>
}

function Dot() {
    return <div className="flex flex-col justify-center px-1">
        <div className="w-1 h-1 bg-zinc-200 rounded-full" />
    </div>
}

export function Avatar({ name, size = "s" }: { name: string, size?: "s" | "l" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "s" ? "w-5 h-5" : "w-9 h-9"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size === "s" ? "text-xs" : "text-sm"} text-gray-600`}>{name[0]}</span>
    </div>
}

