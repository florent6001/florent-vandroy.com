import Link from "next/link";

export default function post({ post }) {
  return (
    <Link
      title={`Se rendre sur l'article "${post.frontmatter.title}"`}
      className="text-black dark:text-white flex justify-between flex-col-reverse lg:flex-row lg:items-center py-5 dark:hover:bg-gray-800 hover:bg-gray-200 bg-body px-5 transition duration-700 hover:no-underline"
      href={`/blog/${post.slug}`}
      key={post.slug}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <h3 className="font-normal py-0" itemProp="headline">
        {post.frontmatter.title}
      </h3>
      <p className="lg:text-lg text-sm" itemProp="dateCreated">
        {post.date}
      </p>
    </Link>
  );
}
