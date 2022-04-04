const AWS = require("aws-sdk");
require("dotenv").config();

const { v4: uuidv4 } = require("uuid");

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "hashnode-inline-comments";

module.exports = {
  dynamoDb,
  TABLE_NAME,
};
