module.exports = class UnAuthorizedError extends Error {
  constructor () {
    super('You are not Authorized to access this resource')
    this.name = 'UnAuthorizedError'
  }
}
