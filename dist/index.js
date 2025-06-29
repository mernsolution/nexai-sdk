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
exports.NextAiClient = void 0;
const axios_1 = __importDefault(require("axios"));
class NextAiClient {
    constructor(secretKey, baseUrl = "https://api.nextai.com") {
        this.secretKey = secretKey;
        this.baseUrl = baseUrl;
    }
    getScheduledBlogs() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const res = yield axios_1.default.get(`${this.baseUrl}/api/blogs`, {
                    headers: {
                        Authorization: `Bearer ${this.secretKey}`,
                    },
                });
                return res.data;
            }
            catch (error) {
                throw new Error(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Failed to fetch blogs");
            }
        });
    }
}
exports.NextAiClient = NextAiClient;
