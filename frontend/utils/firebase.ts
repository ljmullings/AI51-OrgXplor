import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDiYkNm5i1DR6dnEra8SZsKUI86Nf3f64k',
  authDomain: 'testing-9fa87.firebaseapp.com',
  projectId: 'testing-9fa87',
  storageBucket: 'testing-9fa87.firebasestorage.app',
  messagingSenderId: '7396458111',
  appId: '1:7396458111:web:5ab5a4c8a456aaee1b094a',
};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
