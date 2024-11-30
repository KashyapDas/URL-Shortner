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
const db_1 = __importDefault(require("../database/db"));
const router = (0, express_1.Router)();
router.get("/:shortnerId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Here the route was hit by the user in the browser url and when this route was hit the route will redirect the user to the corresponding url attached to the shortner url
    const shortUrl = req.params.shortnerId;
    const response = yield db_1.default.findOne({
        shortUrl
    });
    if (!response) {
        return res.json({
            result: false,
        });
    }
    res.redirect(response.originalUrl);
}));
exports.default = router;
