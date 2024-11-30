"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod"); // Correct import for Zod
const urlSchema = zod_1.z.object({
    url: zod_1.z.string().url({ message: "Invalid URL" })
});
exports.default = urlSchema;
