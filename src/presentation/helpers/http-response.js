const { InvalidCredentialError, UnAuthorizedError, ServerError } = require('../errors')
module.exports = class HttpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static invalidCredentialError () {
    return {
      statusCode: 401,
      body: new InvalidCredentialError()
    }
  }

  static unAuthorizedError () {
    return {
      statusCode: 403,
      body: new UnAuthorizedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
