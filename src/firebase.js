import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// hardkodirano ali dovoljno za potrebe labosa
const firebaseConfig = {
  apiKey: "AIzaSyBoKUIqTwQItrCAsqlPdcrAZQwa89JwrIE",
  authDomain: "vuejs-web2.firebaseapp.com",
  projectId: "vuejs-web2",
  storageBucket: "vuejs-web2.firebasestorage.app",
  messagingSenderId: "541345843727",
  appId: "1:541345843727:web:76c78d2a7436a9b5b6317a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
