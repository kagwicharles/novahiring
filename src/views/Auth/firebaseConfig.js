import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAPfkCaZH2lYfheVjCgF4iH0SzLF61EF8Q',
  authDomain: 'hirewise-test.firebaseapp.com',
  databaseURL: 'https://hirewise-test-default-rtdb.firebaseio.com',
  projectId: 'hirewise-test',
  storageBucket: 'hirewise-test.appspot.com',
  messagingSenderId: '280558434823',
  appId: '1:280558434823:web:d74edfb4496097969348a2',
}

const firebaseApp = initializeApp(firebaseConfig)

export { firebaseApp }
