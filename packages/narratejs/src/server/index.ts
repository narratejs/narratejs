"use server";

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
