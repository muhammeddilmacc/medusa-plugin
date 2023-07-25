 import { TransactionBaseService } from "@medusajs/medusa"
 
 // In a service in your plugin
  class MyService extends TransactionBaseService {
    protected name: any
    constructor(container, options) {
      super(container)
    // options contains plugin configurations
    const { enableUI, ...otherOptions } = options
    // pass otherOptions to a third-party service
   // const client = new Client(otherOptions)
    }
    // ...
  }