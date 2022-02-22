exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
      "isBase64Encoded": true|false,
        "statusCode": httpStatusCode,
        "headers": { "headerName": "headerValue"},
        "multiValueHeaders": { "headerName": ["headerValue", "headerValue2",],},
        "body": "..."
    };
  }