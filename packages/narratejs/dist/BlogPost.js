"use strict";
// src/components/BlogPost.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BlogPost = ({ title, content }) => (react_1.default.createElement("article", null,
    "ARTICLE!",
    react_1.default.createElement("h2", null, title),
    react_1.default.createElement("p", null, content)));
exports.default = BlogPost;
