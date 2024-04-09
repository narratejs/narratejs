type Props = {
    options: {
        backendProvider: "supabase" | "jsonplaceholder";
    };
    params?: {};
    searchParams?: {};
};
declare const NarrateJS: {
    ({ options, params, searchParams }: Props): import("react/jsx-runtime").JSX.Element;
    getInitialProps(): Promise<{
        title: string;
        options: {
            backendProvider: string;
        };
    }>;
};
export default NarrateJS;
//# sourceMappingURL=index.d.ts.map