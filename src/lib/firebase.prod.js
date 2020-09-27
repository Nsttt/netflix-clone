import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Seed database

// Config
const config = {
  apiKey: 'AIzaSyDJqZ23ZJq9FfBR-12pDoBQWcUGQ_41Gto',
  authDomain: 'netflix-clone-7ac6e.firebaseapp.com',
  databaseURL: 'https://netflix-clone-7ac6e.firebaseio.com',
  projectId: 'netflix-clone-7ac6e',
  storageBucket: 'netflix-clone-7ac6e.appspot.com',
  messagingSenderId: '52306348530',
  appId: '1:52306348530:web:b16440742f7639f907c36b',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
