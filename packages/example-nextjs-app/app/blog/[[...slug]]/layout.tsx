import { BlogProvider, NarrateJSConfig, fetchPostBySlug } from "narratejs";
import { notFound } from "next/navigation";

const narratejsConfig: NarrateJSConfig = {
  backendProvider: "jsonplaceholder",
  //   supabaseConfig: {
  //     supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //     supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   },
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  const post = await fetchPostBySlug(params.slug);
  if (!post) notFound();

  console.log(post);

  //   console.log(post());
  return (
    <BlogProvider config={narratejsConfig}>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="mb-10">{post.body}</p>
        {children}
      </div>
    </BlogProvider>
  );
}
