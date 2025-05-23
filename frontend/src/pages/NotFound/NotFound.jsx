export default function NotFound(){
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gray-700">Page Not Found</p>
        <a href="/" className="mt-4 text-blue-500 underline">
        Go back to the homepage
        </a>
    </div>
    )
}