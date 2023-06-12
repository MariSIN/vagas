const statusCode = {
    ok: 200,
    notFound: 404,
    created: 201,
    conflict: 409,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    noContent: 204,
    unprocessableEntity: 422,
    internalServerError: 500,
  };

module.exports = { statusCode }