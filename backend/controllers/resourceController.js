const asyncHandler = require("express-async-handler");
const Resource = require("../models/resourceModel");

const insertResource = asyncHandler(async (req, res) => {
  const data = new Resource({
    name: req.body.name,
    image: req.file.filename,
    desc: req.body.desc,
    link: req.body.link,
    type: req.body.type,
    tags: req.body.tags,
  });
  data
    .save()
    .then(() => {
      res
        .status(201)
        .json({ msg: "Resource added successfully", success: true });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({ msg: e, success: false });
    });
});

const getResources = asyncHandler((req, res) => {
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

module.exports = {
  insertResource,
  getResources,
};
