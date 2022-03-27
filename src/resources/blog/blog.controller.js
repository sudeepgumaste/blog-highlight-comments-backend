const { getDummyBlog } = require("../../data/dummyBlogContent");

const getBlogById = (req, res) => {
  const blogId = req.params.id;
  res.json({
    blog: getDummyBlog(blogId),
  });
};

module.exports = {
  getBlogById,
};
