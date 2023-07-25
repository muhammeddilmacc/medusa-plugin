"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// in an endpoint in your plugin
exports.default = (rootDirectory, options) => {
    // options contain the plugin configurations
    const router = (0, express_1.Router)();
    router.get("/hello-world", (req, res) => {
        res.json({
            message: `Welcome to ${options.name ? options.name : "Medusa"}!`,
        });
    });
    return router;
};
