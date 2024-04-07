"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogProvider = exports.BlogPost = void 0;
const BlogContext_1 = __importDefault(require("./context/BlogContext"));
exports.BlogProvider = BlogContext_1.default;
const BlogPost_1 = __importDefault(require("./BlogPost"));
exports.BlogPost = BlogPost_1.default;
