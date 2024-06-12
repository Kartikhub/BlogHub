import { AppBar } from "../components/AppBar"

export const Publish = () => {
    return <div>
        <AppBar name="Anonymous" />
        <div className="pt-2">
            <TextEditor />
        </div>
    </div>
}


function TextEditor() {
    return <form>
        <div className="w-full mb-4 rounded-lg">
            <div className="px-4 py-2 bg-white rounded-t-lg">
                <textarea className="focus:outline-none w-full p-2 text-sm text-gray-900 bg-white border-0" placeholder="Write a Blog..." required ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t">
                <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                    Publish
                </button>
            </div>
        </div>
    </form>
}



