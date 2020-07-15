const database = require("../database/database");

exports.handler = (event, context, callback) => {
  if (event.httpMethod === "GET") {
    let id = event.queryStringParameters.id;
    let product = database.findOne("id", id, database.products);
    if (product === undefined) {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          error: true,
          message: "Product does not exist. Please contact the service desk for more info."
        })
      });
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(product)
    });
  } else {
    callback(null, {
      statusCode: 405,
      body: "Method not allowed. Did you use the correct HTTP method?"
    });
  }
}