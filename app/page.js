import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

const Home = async () => {
  const blogs = await getAllPost();

  return (
    <main className="max-w-7xl mx-auto px-5 my-5 md:my-10">
      {
        blogs.map((blog, indx) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="mt-5 bg-slate-100 border-l-4 border-[#313131] py-3 flex items-center gap-3 hover:bg-slate-200 transition-colors duration-100 ease-in-out">
              <div className="bg-[#313131] text-white px-2 py-1 font-medium shrink-0">Blog: {(indx + 1).toString().padStart(3, '0')}</div>
              <p className="capitalize">{blog.title}</p>
            </div>
          </Link>
        ))
      }
    </main>
  );
};

export default Home;