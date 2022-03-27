const { Router } = require("express");

const blogRouter = require("../resources/blog/blog.router");

const router = new Router();

router.use("/blog", blogRouter);

module.exports = router;
