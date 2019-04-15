import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

!firebase.apps.length ? firebase.initializeApp(config) : null

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth

export { storage, firestore, auth }
