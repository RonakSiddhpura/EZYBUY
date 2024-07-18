// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4nDvTGV3ywxXHvtV9SCu7dKk8D9R-GmI",
    authDomain: "eybuy-d68cd.firebaseapp.com",
    projectId: "eybuy-d68cd",
    storageBucket: "eybuy-d68cd.appspot.com",
    messagingSenderId: "360952536188",
    appId: "1:360952536188:web:7187dac12ea8751b5ebdf9",
    measurementId: "G-TRT83KBLN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}

///--------------------------Ronak Code-------------------------------
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyB4nDvTGV3ywxXHvtV9SCu7dKk8D9R-GmI",
//   authDomain: "eybuy-d68cd.firebaseapp.com",
//   projectId: "eybuy-d68cd",
//   storageBucket: "eybuy-d68cd.appspot.com",
//   messagingSenderId: "360952536188",
//   appId: "1:360952536188:web:7187dac12ea8751b5ebdf9",
//   measurementId: "G-TRT83KBLN5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export {fireDB, auth}