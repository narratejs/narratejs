"use server";

/**
 * Fetches specific blog post by slug name via 3rd party backend.
 * @param {string} slug The slug of the post to fetch the data for.
 * @returns {Promise<any>} The data for the blog post.
 */
export async function fetchPostBySlug(slug: string): Promise<any> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );
    if (!response.ok) {
      // Instead of throwing an error, resolve with null
      return null;
    }
    return response.json();
  } catch (error) {
    // If an error occurs during fetch or response processing, resolve with null
    console.error("Error fetching post by slug:", error);
    return null;
  }
}
