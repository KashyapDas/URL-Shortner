"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zodCheck1_1 = __importDefault(require("../zod/zodCheck1"));
const createMiddleware = (req, res, next) => {
    const { success } = zodCheck1_1.default.safeParse(req.body);
    if (!success) {
        return res.json({
            result: false,
            msg: "Invalid Url/Wrong Input"
        });
    }
    next();
};
exports.default = createMiddleware;
