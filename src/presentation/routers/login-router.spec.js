class LoginRouter {
  route (httpRequest) {
    const { email, password } = httpRequest
    if (!email || !password) {
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

  test('Should return 400 if no password provided', () => {
    const sut = new LoginRouter()
    const httRequest = {
      body: {
        email: 'any_mail@mail.com'
      }
    }
    const httResponse = sut.route(httRequest)
    expect(httResponse.statusCode).toBe(400)
  })
})
