const MissingParamError = require('./missing-param-error')
const InvalidParamError = require('./invalid-param-error')
const InvalidCredentialError = require('./invalid-credential-error')
const ServerError = require('./server-error')
const UnauthorizedError = require('./missing-param-error')

module.exports = {
  MissingParamError,
  InvalidParamError,
  InvalidCredentialError,
  ServerError,
  UnauthorizedError
}
