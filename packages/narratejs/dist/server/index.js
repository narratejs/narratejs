"use strict";
"use server";
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
exports.fetchPostBySlug = void 0;
/**
 * Fetches specific blog post by slug name via 3rd party backend.
 * @param {string} slug The slug of the post to fetch the data for.
 * @returns {Promise<any>} The data for the blog post.
 */
function fetchPostBySlug(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`);
        if (!response.ok) {
            throw new Error("Failed to fetch post metadata");
        }
        return response.json();
    });
}
exports.fetchPostBySlug = fetchPostBySlug;
