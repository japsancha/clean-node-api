module.exports = class InvalidCredentialError extends Error {
  constructor () {
    super('Your credential is invalid')
    this.name = 'InvalidCredentialError'
  }
}
