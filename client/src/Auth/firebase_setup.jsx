// Initial set-up (https://firebase.google.com/docs/web/setup)

import { initializeApp } from 'firebase/app';

// team gmail config:
const firebaseConfig = {
    apiKey: "AIzaSyCR8QIwas5kmDeFld0kau5MoE7aDB9jBJk",
    authDomain: "bean-there-1a5aa.firebaseapp.com",
    projectId: "bean-there-1a5aa",
    storageBucket: "bean-there-1a5aa.appspot.com",
    messagingSenderId: "496416558832",
    appId: "1:496416558832:web:62da1faa6c8c6dd869fc35"
  };

const app = initializeApp(firebaseConfig);

export default app;