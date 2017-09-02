import express from "express";

let router = express.Router();

router.get("/", function(req, res, next) {
    res.json({ "title": "App Route!!!" });
});

export { router as firstRoute };