"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
// In a service in your plugin
class MyService extends medusa_1.TransactionBaseService {
    constructor(container, options) {
        super(container);
        // options contains plugin configurations
        const { enableUI, ...otherOptions } = options;
        // pass otherOptions to a third-party service
        // const client = new Client(otherOptions)
    }
}
