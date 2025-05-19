const SkeletonLoader = () => {
    return (
        <div className="grid grid-cols-4 gap-6 mb-10">
            {Array.from({length: 12}).map((_, index) => (
                <div key={index} className="mx-auto w-[360px] h-[360px] max-w-sm rounded-md border border-zinc-400 dark:border-zinc-600">
                    <div className="flex flex-col h-full animate-pulse">
                        <div className="h-40 rounded bg-zinc-400 dark:bg-zinc-700"></div>
                        <div className="p-4 flex flex-col h-full gap-4">
                            <div className="h-4 rounded bg-zinc-400 dark:bg-zinc-700"></div>
                            <div className="flex h-4 justify-between items-center mt-auto">
                                <div className="h-2 w-1/4 bg-zinc-400 rounded dark:bg-zinc-700"></div>
                                <div className="h-2 w-1/4 bg-zinc-400 rounded dark:bg-zinc-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonLoader