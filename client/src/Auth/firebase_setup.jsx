// Initial set-up (https://firebase.google.com/docs/web/setup)

import { initializeApp } from 'firebase/app';
import KEYS from '../../../config.js';

const app = initializeApp(KEYS.firebaseConfig);

export default app;