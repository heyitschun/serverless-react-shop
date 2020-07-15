const database = require("../database/database");

exports.handler = (event, context, callback) => {
  if (event.httpMethod === "GET") {
    let inspos = database.inspirations;
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(inspos)
    });
  } else {
    callback(null, {
      statusCode: 405,
      body: "Method not allowed."
    })
  }
}