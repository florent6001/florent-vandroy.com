import Link from "next/link"

export default function post({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} key={post.slug} itemScope itemType="https://schema.org/BlogPosting">
          <a className="flex justify-between flex-col-reverse lg:flex-row lg:items-center py-5 text-white hover:bg-gray-800 bg-body px-5 transition duration-700 hover:no-underline">
            <h3 className="font-normal py-0" itemProp="headline">{post.frontmatter.title}</h3>
            <p className="lg:text-2xl text-sm" itemProp="dateCreated">{post.date}</p>
          </a>
        </Link>
      )
}