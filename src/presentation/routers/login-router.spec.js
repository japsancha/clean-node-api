class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('Should return 400 if no e-mail provided', () => {
    const sut = new LoginRouter()
    const httRequest = {
      body: {
        passwword: 'any_password'
      }
    }
    const httResponse = sut.route(httRequest)
    expect(httResponse.statusCode).toBe(400)
  })
})
