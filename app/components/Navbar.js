import Link from "next/link";

const Navbar = () => {
    return (
        <section className="bg-[#111111] py-2">
            <div className="max-w-7xl mx-auto px-5">
                <nav className="flex justify-between items-center gap-5">
                    <Link href="/"><h2 className="text-xl text-white font-bold">Blog</h2></Link>
                    <ul className="flex items-center gap-3 text-white">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/profile">Profile</Link></li>
                    </ul>
                    <Link href="/login"><button className="px-4 py-1 sm:py-2 bg-slate-500 rounded-sm font-medium text-white">Login</button></Link>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;