"use server";

/**
 * Fetches specific blog post by slug name via 3rd party backend.
 * @param {string} slug The slug of the post to fetch the data for.
 * @returns {Promise<any>} The data for the blog post.
 */
export async function fetchPostBySlug(slug: string): Promise<any> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${slug}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch post metadata");
  }
  return response.json();
}
