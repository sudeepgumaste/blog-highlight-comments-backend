const { v4: uuidv4 } = require("uuid");

const { dummyComments } = require("../../../data/dummyComments");
const { dynamoDb, TABLE_NAME } = require("../../../dynamodb");

const comments = [...dummyComments];

const getCommentsByBlogId = async (req, res) => {
  const blog_id = Number.parseInt(req.params.blog_id);
  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "blog_id = :blog_id",
    ExpressionAttributeValues: {
      ":blog_id": blog_id,
    },
  };

  const comments = await dynamoDb.query(params).promise();

  res.json({
    comments: comments.Items,
  });
};

const addCommentOnBlog = async (req, res) => {
  const blog_id = Number.parseInt(req.params.blog_id);

  const commentItem = {
    comment_id: uuidv4(),
    timestamp: Date.now(),
    blog_id,
    ...req.body,
  };

  let params = {
    TableName: TABLE_NAME,
    Item: commentItem,
  };

  try {
    await dynamoDb.put(params).promise();
    res.json({
      msg: "comment added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "error adding comment",
    });
  }
};

module.exports = {
  getCommentsByBlogId,
  addCommentOnBlog,
};
