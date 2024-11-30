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
const express_1 = require("express");
const router = (0, express_1.Router)();
const createMiddleware_1 = __importDefault(require("../middleware/createMiddleware"));
const shortid = require("shortid");
const db_1 = __importDefault(require("../database/db"));
router.post("/", createMiddleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Here the user provide a original url and acc to that url we create and shortner of that alt.
    const originalUrl = req.body.url;
    const shortUrl = shortid();
    const response = yield db_1.default.create({
        originalUrl,
        shortUrl
    });
    if (!response) {
        return res.json({
            result: false,
            msg: "Shortner not created. Plz try later...",
        });
    }
    res.json({
        result: true,
        msg: "Shortner Created...",
        shortUrl: `http://localhost:3000/${shortUrl}`
    });
}));
exports.default = router;
