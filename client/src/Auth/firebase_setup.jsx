// Initial set-up (https://firebase.google.com/docs/web/setup)

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCX93g8WQu_tznHFVl_wMzJuucXtc3axAQ",
  authDomain: "bean-there-89b8c.firebaseapp.com",
  projectId: "bean-there-89b8c",
  storageBucket: "bean-there-89b8c.appspot.com",
  messagingSenderId: "603111362402",
  appId: "1:603111362402:web:7badf5d60130491854e63b",
  measurementId: "G-S99WPRS36D"
};

const app = initializeApp(firebaseConfig);

export default app;