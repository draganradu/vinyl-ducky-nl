// Create a new store instance.
import { createStore, type StoreOptions } from 'vuex'
import { type RootState } from './storeTypes'
import app from './app'
import products from './products'

const store: StoreOptions<RootState> = {
  modules: {
    app,
    products,
  }
}

export default createStore(store)