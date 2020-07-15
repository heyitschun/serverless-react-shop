const database = require("../database/database");

exports.handler = (event, context, callback) => {
  if (event.httpMethod === "GET") {
    context.callbackWaitsForEmptyEventLoop = false;
    let products = database.products;
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(products)
    });
  } else {
    callback(null, {
      statusCode: 405,
      body: "Method not allowed. Did you use the correct HTTP method?"
    })
  }
};