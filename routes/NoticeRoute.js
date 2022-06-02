const Router = require("express");
const router = new Router();
const controller = require("./../controllers/NoticeController");

router
    .get("/", controller.getAll)
    .post("/", controller.create)
    .put("/", controller.update)
    .delete("/", controller.delete);

module.exports = router;