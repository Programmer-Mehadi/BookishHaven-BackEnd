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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const uuid_1 = require("uuid");
const user_model_1 = require("./user.model");
// get all last 10 books
const signIn = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne(Object.assign({}, data));
    const token1 = (0, uuid_1.v4)().split("-").join("");
    const token2 = (0, uuid_1.v4)().split("-").join("");
    const token3 = (0, uuid_1.v4)().split("-").join("");
    if (result) {
        const updateResult = yield user_model_1.User.updateOne({
            _id: result._id,
        }, {
            token: {
                tokenText: token1 + token2 + token3,
                validateTime: new Date(),
            },
        });
        if (updateResult) {
            let finalResult = yield user_model_1.User.findOne(Object.assign({}, data));
            return finalResult;
        }
    }
    return result;
});
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const token1 = (0, uuid_1.v4)().split("-").join("");
    const token2 = (0, uuid_1.v4)().split("-").join("");
    const token3 = (0, uuid_1.v4)().split("-").join("");
    data.token = {
        tokenText: token1 + token2 + token3,
        validateTime: new Date(),
    };
    const result = yield user_model_1.User.create(data);
    return result;
});
const checkSignIn = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne({
        "token.tokenText": token.token,
    });
    if (result) {
        const r = {
            _id: result._id,
            name: result.name,
            email: result.email,
        };
        return r;
    }
    return result;
});
exports.UserService = {
    signIn,
    signUp,
    checkSignIn,
};
