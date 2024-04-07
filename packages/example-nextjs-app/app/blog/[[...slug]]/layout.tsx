import { BlogProvider } from "narratejs";

const narratejsConfig: any = {
  backendProvider: "supabase",
  supabaseConfig: {
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const {} = await fetchPostBySlug()
  return <BlogProvider config={narratejsConfig}>{children}</BlogProvider>;
}
