const MissingParamError = require('./missing-param-error')
const InvalidCredentialError = require('./invalid-credential-error')
const UnAuthorizedError = require('./unauthorized-error')
module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
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
