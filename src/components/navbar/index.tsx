import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex h-32 w-full items-center justify-between bg-white px-16">
            <div className="flex items-center">
                <div className="flex items-center gap-2 mr-8">
                    <Image src="/logo.svg" alt="Logo" width={60} height={60} />
                    <h1 className="text-2xl font-bold text-orange-500 hidden sm:block">Tikitoko</h1>
                </div>

                <input type="text" placeholder="Search.." className="border border-gray-300 rounded-md px-4 py-2 text-black hidden sm:block" />
            </div>

            <button className="text-xl bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600">Login</button>
        </nav>
    )
}