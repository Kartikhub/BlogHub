import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = ({name} : {name: string}) => {
    return <div className="flex justify-between w-screen p-2 px-9 border-b">
        <Link to={'/blogs'} className="flex flex-col justify-center font-semibold" >
            Hub Blog
        </Link>
        <div>
            <Avatar name={name} size="l" />
        </div>
    </div>
}