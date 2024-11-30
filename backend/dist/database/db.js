"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://kashyap12345:kashyap123456789@cluster0.mwsas.mongodb.net/url-shortner").then(() => {
    console.log("Database connect successfully...");
}).catch(err => console.log("Database has got some error..."));
// Create the schema
const shortnerSchema = new mongoose_1.default.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }
}, {
    // Enable timestamps
    timestamps: true
});
// Create the model
const ShortnerModel = mongoose_1.default.model('Shortner', shortnerSchema);
exports.default = ShortnerModel;
