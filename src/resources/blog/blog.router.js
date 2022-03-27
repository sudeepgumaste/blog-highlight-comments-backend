const { Router } = require("express");
const commentsRouter = require("./inline-comments/comments.router");

const blogController = require("./blog.controller");

const blogRouter = Router();

blogRouter.get("/:id", blogController.getBlogById);
blogRouter.use("/:id/inline-comments", commentsRouter);

module.exports = blogRouter;
