import * as Keychain from 'react-native-keychain'

const KeyChainStorage = {
  async setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<any> {
    const set = await Keychain.setGenericPassword('username', value, { service: key })
    if (callback) {
      callback(Error(`KeyChainStorage failed to set item ${key}`))
    }
    return set
  },

  async getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<any> {
    const item = await Keychain.getGenericPassword({ service: key })
    if (item) {
      if (callback) {
        callback(undefined, item.password)
      }
      return Promise.resolve(item.password)
    }
    if (callback) {
      callback(Error('KeyChainStorage cannot access keychain'))
    }
    return Promise.resolve(null)
  },

  async removeItem(key: string, callback?: (error?: Error) => void): Promise<void> {
    const success = await Keychain.resetGenericPassword({ service: key })
    if (!success) {
      if (callback) {
        callback(Error(`KeyChainStorage failed to remove item ${key}`))
      }
    }
    return Promise.resolve()
  },
}

export default KeyChainStorage
