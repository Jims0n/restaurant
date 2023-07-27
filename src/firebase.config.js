import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyATcsJ8FLEPwY9isyHVVeNQMZKVKthziYQ",
    authDomain: "restaurantapp-2a1f4.firebaseapp.com",
    databaseURL: "https://restaurantapp-2a1f4-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-2a1f4",
    storageBucket: "restaurantapp-2a1f4.appspot.com",
    messagingSenderId: "1087274907204",
    appId: "1:1087274907204:web:fc1db1524e2b8abedc2e11"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  

  export { app, firestore, storage };