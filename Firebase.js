// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHsnEHK142ddYzAm5OHpYW8VD0OvLpTqA',
  authDomain: 'unnamedproject-2a115.firebaseapp.com',
  projectId: 'unnamedproject-2a115',
  storageBucket: 'unnamedproject-2a115.appspot.com',
  messagingSenderId: '978832534749',
  appId: '1:978832534749:web:41c85e9f84cef41be53f34',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
