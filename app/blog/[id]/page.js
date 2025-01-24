import getPost from "@/lib/getPost";

export const metadata = {
    title: "Blog | Blog Details",
    description: "This is blog details page.",
};

const BlogDetails = async ({ params }) => {
    const {id} = params;
    const blog = await getPost(id);

    return (
        <main className="max-w-4xl mx-auto px-5 my-5 md:my-10">
            <div className="bg-slate-100 border-t-4 shadow-lg border-[#313131] px-5">
              <div className="bg-[#313131] text-white px-3 py-1 font-medium w-24 mx-auto text-center">Blog: {id.padStart(3, '0')}</div>
              <h2 className="capitalize font-medium mt-5">{blog.title}</h2>
              <p className="pb-5 mt-2">{blog.body}</p>
            </div>
        </main>
    );
};

export default BlogDetails;