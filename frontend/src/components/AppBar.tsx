import { Avatar } from "./BlogCard"

export const AppBar = ({name} : {name: string}) => {
    return <div className="flex justify-between w-screen p-2 px-9 border-b">
        <div className="flex flex-col justify-center font-semibold">
            Hub Blog
        </div>
        <div>
            <Avatar name={name} size="l" />
        </div>
    </div>
}