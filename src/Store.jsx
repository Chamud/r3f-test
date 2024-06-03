// Store.jsx 

import { proxy } from 'valtio'

const store = proxy({
  scene: 1,
  image: ''
})

export { store }