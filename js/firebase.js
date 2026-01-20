import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc, 
    updateDoc, 
    setDoc,
    getDoc  // <--- MAKE SURE THIS IS HERE!
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDT2G4Fd0HhSBo7Ie1m0sF8c7-CNLOV7Ho",
    authDomain: "giggle-gird-gwoc-2026.firebaseapp.com",
    projectId: "giggle-gird-gwoc-2026",
    storageBucket: "giggle-gird-gwoc-2026.appspot.com",
    messagingSenderId: "18442374008",
    appId: "1:18442374008:web:89f62a6721c94377c6968d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, setDoc, getDoc };