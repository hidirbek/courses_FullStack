const { Router } = require("express");
const courseCtrl = require("../controller/course_controller");
const authMid = require("../middleware/auth_middleware");

let router = Router();

router.get("/courese", courseCtrl.GET);
router.post("/courses", courseCtrl.CREATE);
router.put("/courses/:id", courseCtrl.UPDATE);
router.delete("/delete_course/:id", courseCtrl.DELETE);

module.exports = router;
