import Link from "next/link";
import { allBlogs } from 'contentlayer/generated';

export default function Blogs({ blogs }) {
  return (
    <>
        <div>
          <h1>Posts</h1>
          {blogs.map(({ title, description, slug }, index) => (
                <Link passHref key={index} href={`/blog/${slug}`}>
                  <div className="
                    group
                    rounded
                    p-2
                    font-medium
                    transition
                    ease-in-out
                    mb-4
                    hover:cursor-pointer
                    hover:shadow-md
                    dark:hover:shadow-none"
                  >
                  <p className="m-0">
                    <a >
                      <b>{title}</b>
                    </a>
                    <br />
                    {description}
                  </p>
              </div>
                </Link>
          ))}
        </div>
    </>
  );
}

export const getStaticProps = async () => {
  const blogs = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  return {
    props: {
      blogs,
    },
  }
}