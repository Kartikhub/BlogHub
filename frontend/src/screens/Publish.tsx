import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    async function sendRequest() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
        navigate(`/blog/${response.data.id}`);
    }


    return <div>
        <AppBar />
        <div className="flex flex-col justify-center">
            <div className="mb-6 mx-2">
                <input type="text" placeholder="Title" className="bg-gray-50 mt-6 border border-gray-300 text-gray-900 text-md md:text-2xl rounded-lg block w-full p-2.5 pb-3 focus:outline-none" onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            </div>
            <div className="pt-2">
                <TextEditor onChange={(e) => {
                    setContent(e.target.value)
                }} />
                <div className="flex items-center justify-between px-3 py-2 border-t">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={sendRequest}>
                        Publish
                    </button>
                </div>
            </div>
        </div>
    </div>
}


function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <form>
        <div className="w-full mb-4 rounded-lg">
            <div className="px-4 py-2 bg-white rounded-t-lg">
                <textarea className="h-72 focus:outline-none w-full p-2 text-sm text-gray-900 bg-white border-0" placeholder="Write a Blog..." onChange={onChange} required  ></textarea>
            </div>
        </div>
    </form>

}



