import { Router } from "express"

// in an endpoint in your plugin
export default (rootDirectory, options) => {
    // options contain the plugin configurations
    const router = Router()
  
    router.get("/hello-world", (req, res) => {
      res.json({
        message: 
        `Welcome to ${options.name ? options.name : "Medusa"}!`,
      })
    })
  
    return router
  }