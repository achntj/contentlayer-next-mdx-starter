import { allBlogs } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import 'prismjs/themes/prism-tomorrow.css'

import Image from "next/image"

const MDXcomponents = {
  // Pass Custom Components here (for use in markdown files)
  Image,
};


export default function PostPage({
  blog
}) {
  const MDXComponent = useMDXComponent(blog.body.code)
  return (
    <>
        <article>
          <div>
            <h1>{blog.title}</h1>
            <p>
              <span>{blog.date}</span>
            </p>
          </div>
          <div
            className="entry"
          >
            <MDXComponent components={MDXcomponents}/>
          </div>
        </article>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const blog = allBlogs.find(p => p.slug === params.slug)
  return {
    props: {
      blog,
    },
  }
}
