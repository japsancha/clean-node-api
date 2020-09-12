const { MissingParamError } = require('../../utils/errors')
class AuthUseCase {
  async auth (email) {
    if (!email) {
      return new Error(new MissingParamError('email'))
    }
  }
}

describe('Auth UseCase', () => {
  test('should return null if no email is provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow(new MissingParamError('email'))
  })
})
