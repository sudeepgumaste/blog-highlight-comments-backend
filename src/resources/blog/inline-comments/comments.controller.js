const res = require("express/lib/response");
const { dummyComments } = require("../../../data/dummyComments");

const comments = [...dummyComments];

const getCommentsByBlogId = (req, res) => {
  const blogId = req.params.id;
  res.json({
    comments,
  });
};

module.exports = {
  getCommentsByBlogId,
};
