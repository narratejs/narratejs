"use server";
import React from "react";

export async function FetchJSONBlogBySlug(slug: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );
    const data = await response.json();

    console.log(data, "JSON DATA!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    if (!data.id) return null;

    return {
      id: data.id,
      title: data.title,
      content: data.body,
      date: new Date().toISOString(),
      image_url: "https://placehold.co/600x315",
      slug,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
