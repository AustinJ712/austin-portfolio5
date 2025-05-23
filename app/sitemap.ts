// import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  /*{ const blogs = allBlogs.map((post) => ({
    url: `https://austinsuhr.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  }*/

  const routes = ['', /*'/blog', '/uses', */ '/projects'].map(
    (route) => ({
      url: `https://www.austinsuhr.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, /* ...blogs */];
}
