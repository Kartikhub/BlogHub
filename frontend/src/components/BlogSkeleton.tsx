
export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className="flex flex-col justify-center max-w-4xl pt-5 mx-3">
            <div className="flex flex-row gap-1 pb-2">
                <div className="flex flex-col justify-center">
                    <div className={`relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="h-2 bg-gray-200 rounded-full w-48" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="text-zinc-400 text-xs font-light pt-4 pb-2">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                </div>
            </div>
        </div>
    </div>
}