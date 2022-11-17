module.exports = (error, request, response, next) => {
  let message = error.message || "Internal Server Error";
  let status = error.status || 500;
  console.log(error);

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;

    case "JsonWebTokenError":
    case "InvalidToken":
      status = 401;
      message = "Invalid token";
      break;

    case "Unauthenticated":
      status = 401;
      message = "Invalid Email/Password";
      break;
  }

  response.status(status).json({
    message,
  });
};
