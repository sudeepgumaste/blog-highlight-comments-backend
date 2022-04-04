const { Router } = require("express");

const blogController = require("./blog.controller");
const commentsController = require("./inline-comments/comments.controller");

const blogRouter = Router();

blogRouter.get("/:id", blogController.getBlogById);
blogRouter.get(
  "/:blog_id/inline-comments/",
  commentsController.getCommentsByBlogId
);
blogRouter.post(
  "/:blog_id/inline-comments/",
  commentsController.addCommentOnBlog
);

module.exports = blogRouter;
