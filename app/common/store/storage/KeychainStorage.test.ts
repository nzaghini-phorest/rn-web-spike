import KeyChainStorage from './KeyChainStorage'

let mockSecret: any

jest.mock('react-native-keychain', () => {
  return {
    setGenericPassword: jest.fn(() => {
      return Promise.resolve(true)
    }),
    getGenericPassword: jest.fn(() => {
      return mockSecret
    }),
    resetGenericPassword: jest.fn(() => {
      mockSecret = undefined
      return true
    }),
  }
})

describe('Keychain container', () => {
  it('Should let write values', () => {
    const result = KeyChainStorage.setItem('key', 'value')
    expect(result).toBeTruthy()
  })

  describe('When data is available', () => {
    beforeAll(() => {
      mockSecret = { service: 'x', username: 'y', password: 'secret-password' }
    })

    it('Should let read values', async () => {
      const result = await KeyChainStorage.getItem('key')
      expect(result).toEqual(mockSecret.password)
    })
  })

  describe('When data is not available', () => {
    beforeAll(() => {
      mockSecret = false
    })

    it('Should reject the request', async () => {
      const result = await KeyChainStorage.getItem('key')
      expect(result).toBeNull()
    })
  })

  describe('When removing keys', () => {
    beforeAll(() => {
      mockSecret = { service: 'x', username: 'y', password: 'secret-password' }
    })

    it('Should callback with error and resolve promise', async () => {
      await KeyChainStorage.removeItem('key')
      expect(mockSecret).toBeUndefined()
    })
  })
})
