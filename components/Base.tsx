// components/Base.js
import Link from "next/link";

export default function Base({ children, ...pageProps }) {
  return (
    <>
      <div className="prose-a:text-sky-500 prose-a:no-underline prose-a:transition hover:prose-a:text-sky-600">
        <div className="max-w-[700px] mx-auto flex flex-col min-h-screen px-8 sm:px-4 prose">
          <div className="flex space-x-5 mt-5 mb-10">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="text-gray-700 flex-grow">
            {children}
          </div>
          <div className="my-5 pt-5 border-t-2 border-dotted border-t-slate-600">
            Created by <a target="_blank" rel="noreferrer" href="https://achintyajha.com">Achintya Jha</a>
          </div>
        </div>
      </div>
    </>
  );
}
