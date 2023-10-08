import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB6Db40E7oy5jvAf8dOh4JgWqvFxZ3JnX0",
    authDomain: "ofdapp-2cce6.firebaseapp.com",
    databaseURL: "https://ofdapp-2cce6-default-rtdb.firebaseio.com",
    projectId: "ofdapp-2cce6",
    storageBucket: "ofdapp-2cce6.appspot.com",
    messagingSenderId: "122568980680",
    appId: "1:122568980680:web:59a8bd09b3419b396dcdfd"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export{app, firestore, storage};