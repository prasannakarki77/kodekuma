const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const {
  insertResource,
  getResources,
} = require("../controllers/resourceController");

router.post("/insert", upload.single("r_img"), insertResource);
router.get("/get", getResources);

module.exports = router;
