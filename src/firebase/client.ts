// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB1u_YD4awEIYae7pI9gdvx4G95F1suxCY',
    authDomain: 'mgyone-personalpage.firebaseapp.com',
    projectId: 'mgyone-personalpage',
    storageBucket: 'mgyone-personalpage.appspot.com',
    messagingSenderId: '171630886500',
    appId: '1:171630886500:web:795f38e74acab93878e971',
    measurementId: 'G-FNX7212SJ4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
