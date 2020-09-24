module.exports = {
  token: 'any_to',
  id: '',
  secret: '',

  sign (id, secret) {
    this.id = id
    this.secret = secret
    return this.token
  }
}
