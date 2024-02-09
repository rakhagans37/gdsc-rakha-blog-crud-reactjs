// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5gNhHMBZj8vrRePZLesiPr-igJxY7Lsw",
    authDomain: "rakha-crud-react.firebaseapp.com",
    projectId: "rakha-crud-react",
    storageBucket: "rakha-crud-react.appspot.com",
    messagingSenderId: "681560776625",
    appId: "1:681560776625:web:f52db21c11b1d756ff2790",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addData($title, $description) {
    try {
        const docRef = await addDoc(collection(db, "blog"), {
            title: $title,
            description: $description,
            date: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function readDatabase(){
    const querySnapshot = await getDocs(collection(db, "blog"));

    let data = [];
    querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
    });

    return data;
}

async function deleteData(id){
    try {
        await deleteDoc(doc(db, "blog", id));
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}

async function updateData(id, title, description){
    const docRef = doc(db, "blog", id);
    await updateDoc(docRef, {
        title: title,
        description: description,
    });
}



export { addData, readDatabase, deleteData, updateData };