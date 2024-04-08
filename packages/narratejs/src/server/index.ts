"use server";

export async function fetchPostBySlug(slug: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );
    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error("Failed to fetch post");
    }
    return await response.json(); // Parse and return the JSON response
  } catch (error) {
    // Error handling (e.g., logging, rethrowing the error, or returning a default value)
    console.error("Error fetching post by slug:", error);
    throw error; // Rethrow or handle as appropriate
  }
}
