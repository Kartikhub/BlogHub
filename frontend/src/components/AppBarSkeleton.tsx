

export const AppBarSkeleton = () => {
    return <div className="flex justify-between w-screen p-2 px-9 border-b">
        <div className="flex flex-col justify-center font-semibold" >
            <div className="h-2.5 bg-gray-200 rounded-full w-16 mt-4 mb-4"></div>
        </div>
        <div className="flex flex-row">

            <div className="flex flex-col justify-center pr-4 mr-2">
            <div className="h-8 w-16 bg-gray-100 rounded-lg"></div>
            </div>
            <div className="flex flex-col justify-center">
                    <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
                    </div>
                </div>
        </div>
    </div>
}