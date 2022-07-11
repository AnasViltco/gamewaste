import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTX1IzhRq3z_sOpXxbgumebL05EuL9mOE',
  authDomain: 'game-website-a0c04.firebaseapp.com',
  projectId: 'game-website-a0c04',
  storageBucket: 'game-website-a0c04.appspot.com',
  messagingSenderId: '1045382814014',
  appId: '1:1045382814014:web:98de36d8912bd4e742b46f',
  measurementId: 'G-YWRMHKDEKD',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
