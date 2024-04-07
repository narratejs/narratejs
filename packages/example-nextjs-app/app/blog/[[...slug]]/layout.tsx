import { BlogProvider } from "narratejs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BlogProvider
      config={{
        backendProvider: "supabase",
        supabaseConfig: {
          supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
          supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        },
      }}
    >
      {children}
    </BlogProvider>
  );
}
