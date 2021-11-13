module.exports = app => {
    const users = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", tutorials.create);
  
    router.put("/:id", tutorials.update);
  
    router.delete("/:id", tutorials.delete);
    
    app.use('/api/user', router);
  };