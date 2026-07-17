const studController = require('../controller/studController.js');
const express = require('express');

const router = express.Router();
    
    router.post("/", studController.create);
    router.put("/:_id",studController.update);
    router.delete("/:_id",studController.del);
    router.get("/:_id",studController.get);

module.exports = router;