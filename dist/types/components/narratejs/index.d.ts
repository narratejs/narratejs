type Props = {
    options: {
        backendProvider: "supabase" | "jsonplaceholder";
        adminSlug: string;
    };
    params?: {
        narratejs: string[];
    };
    searchParams?: {};
};
declare const NarrateJS: ({ options, params, searchParams }: Props) => import("react/jsx-runtime").JSX.Element;
export default NarrateJS;
//# sourceMappingURL=index.d.ts.map