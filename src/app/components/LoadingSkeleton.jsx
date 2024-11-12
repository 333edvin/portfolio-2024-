export default function LoadingSkeleton(){
    return(
        <div className="container mx-auto px-6 py-10 space-y-6">
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className="flex items-center animate-pulse space-x-4"
                >
                    {/* Left side: Placeholder for name */}
                    <div className="flex-1 space-y-2">
                        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>

                    {/* Right side: Placeholder for image */}
                    <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                </div>
            ))}
        </div>
    )
}