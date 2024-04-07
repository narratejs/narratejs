"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlog = exports.BlogProvider = void 0;
const react_1 = __importStar(require("react"));
const BlogContext = (0, react_1.createContext)({
    posts: [],
    setPosts: (() => { }),
});
const BlogProvider = ({ children, config, }) => {
    const [posts, setPosts] = (0, react_1.useState)([]);
    const [supabase, setSupabase] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (config.backendProvider === "supabase" && config.supabaseConfig) {
            // Initialize Supabase client
            // const supabaseClient = createClient(
            //   config.supabaseConfig.supabaseUrl,
            //   config.supabaseConfig.supabaseAnonKey
            // );
            // setSupabase(supabaseClient);
        }
        // Handle initialization for other backends as you add support for them
    }, [config]);
    const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
        const data = yield response.json();
        setPosts(data);
        // console.log(data, "POSTS...........");
    });
    (0, react_1.useEffect)(() => {
        // console.log("BLOG CONTEXT USE EFFECT RAN.. FETCHING POSTS...");
        fetchPosts();
    }, []);
    const value = { posts, setPosts };
    return react_1.default.createElement(BlogContext.Provider, { value: value }, children);
};
exports.BlogProvider = BlogProvider;
exports.default = exports.BlogProvider;
const useBlog = () => {
    const context = (0, react_1.useContext)(BlogContext);
    if (context === undefined) {
        throw new Error("useBlog must be used within a BlogProvider");
    }
    return context;
};
exports.useBlog = useBlog;
