const { Router } = require("express");
const { getCommentsByBlogId } = require("./comments.controller");

const commentsRouter = Router();

commentsRouter.get("/", getCommentsByBlogId);

module.exports = commentsRouter;
