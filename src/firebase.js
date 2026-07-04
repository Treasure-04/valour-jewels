import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0bPDTxA41iFC0QNZ3wYoOT7jFeXVuNyY",
  authDomain: "valour-jewels.firebaseapp.com",
  projectId: "valour-jewels",
  storageBucket: "valour-jewels.firebasestorage.app",
  messagingSenderId: "1084469749584",
  appId: "1:1084469749584:web:cee65259b012f5fdc1ae55"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)