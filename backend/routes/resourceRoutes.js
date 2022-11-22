const express = require("express");
const router = express.Router();

const Resource = require("../models/resourceModel");
router.get("/get", (req, res) => {
  Resource.find()
    .then((resource) => {
      res.status(201).json({
        success: true,
        data: resource,
      });
    })
    .catch((e) => {
      res.status(400).json({
        msg: e,
      });
    });
});

module.exports = router;
