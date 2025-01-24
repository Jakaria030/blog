import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Blog | Profile",
    description: "This is profile page.",
};

const Profile = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user){
        redirect('api/auth/login');
    }

    return (
        <main className="max-w-7xl mx-auto px-5">
            <h2 className="text-xl font-bold mt-5 text-center">Welcome to your profile, {user?.given_name} {user?.family_name}!</h2>
        </main>
    );
};

export default Profile;