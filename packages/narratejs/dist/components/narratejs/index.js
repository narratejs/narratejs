"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const admin_component_1 = __importDefault(require("../admin-component"));
const server_1 = require("src/server");
const navigation_1 = require("next/navigation");
const BlogContext_1 = __importDefault(require("src/context/BlogContext"));
function NarrateJS(_a) {
    return __awaiter(this, arguments, void 0, function* ({ children, config, params, }) {
        var _b;
        //   console.log(params.slug);
        if (((_b = params.slug) === null || _b === void 0 ? void 0 : _b[0]) === "admin")
            return react_1.default.createElement(admin_component_1.default, null);
        const post = yield (0, server_1.fetchPostBySlug)(params.slug);
        if (!post)
            (0, navigation_1.notFound)();
        //   console.log(post);
        //   console.log(post());
        return (react_1.default.createElement(BlogContext_1.default, { config: config },
            react_1.default.createElement("div", { className: "p-5" },
                react_1.default.createElement("h1", { className: "text-2xl font-bold mb-2" }, post === null || post === void 0 ? void 0 : post.title),
                react_1.default.createElement("p", { className: "mb-10" }, post === null || post === void 0 ? void 0 : post.body),
                children)));
    });
}
exports.default = NarrateJS;
