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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const user_service_1 = require("./user.service");
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userData } = req.body.user;
    const result = yield user_service_1.UserService.signIn(userData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No User Found !" : "User Found Successfully",
        data: result,
    });
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userData } = req.body.user;
    const result = yield user_service_1.UserService.signUp(userData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No User Created !" : "User Created Successfully",
        data: result,
    });
});
const checkSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token;
    const result = yield user_service_1.UserService.checkSignIn(token);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: result === null ? "No User Found !" : "User Found Successfully",
        data: result,
    });
});
exports.UserController = {
    signIn,
    signUp,
    checkSignIn,
};
