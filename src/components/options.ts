export interface NarrateOptions {
  // Define your options here
  debugMode: boolean;
  backendProvider: "jsonplaceholder" | "supabase";
}

export const defaultOptions: NarrateOptions = {
  backendProvider: "jsonplaceholder",
  debugMode: false,
};
