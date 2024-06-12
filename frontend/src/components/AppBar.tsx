import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = ({ name }: { name: string }) => {
    return <div className="flex justify-between w-screen p-2 px-9 border-b">
        <Link to={'/blogs'} className="flex flex-col justify-center font-semibold" >
            Hub Blog
        </Link>
        <div className="flex flex-row">
            <Link to={'/publish'}>
                <div className="flex flex-col justify-center pr-4">
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        New
                    </button>
                </div>
            </Link>
            <Avatar name={name} size="l" />
        </div>
    </div>
}