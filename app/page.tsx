import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row items-center">
        <div className="p-10 flex flex-col gap-5 bg-[#2B2929] dark:bg-slate-800 text-white">
          <h1 className="text-5xl font-bold">
            Welcome to dropbox.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            omnis?
          </h1>

          <p className="pb-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut
            aspernatur ratione laborum eveniet tempora eaque nostrum totam
            explicabo fugit!
          </p>

          <Link href={"/dashboard"} className="flex bg-blue-500 p-5 w-fit">
            Try it for free <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <img
            className="rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2zTzaNbGzoCYlqMAFumv6zH3MLLsejrYIw&usqp=CAU"
          />
        </div>
      </div>
    </main>
  );
}
