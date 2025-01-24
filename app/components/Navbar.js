import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
    const {isAuthenticated} = getKindeServerSession();

    return (
        <section className="bg-[#111111] py-2 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5">
                <nav className="flex justify-between items-center gap-5">
                    <Link href="/"><h2 className="text-xl text-white font-bold">Blog</h2></Link>
                    <ul className="flex items-center gap-3 text-white">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/profile">Profile</Link></li>
                    </ul>

                    {
                        (await isAuthenticated()) ? (<LogoutLink>
                            <button className="px-4 py-1 sm:py-2 bg-slate-500 rounded-sm font-medium text-white hover:bg-slate-600 transition-colors duration-100 ease-in-out">Logout</button>
                        </LogoutLink>) : (<LoginLink>
                            <button className="px-4 py-1 sm:py-2 bg-slate-500 rounded-sm font-medium text-white hover:bg-slate-600 transition-colors duration-100 ease-in-out">Login</button>
                        </LoginLink>) 
                    }
                    
                </nav>
            </div>
        </section>
    );
};

export default Navbar;