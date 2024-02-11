import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: "rakha-crud-react",
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function addData(title, description) {
    try {
        const docRef = await addDoc(collection(db, "blog"), {
            title,
            description,
            date: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function readDatabase() {
    try {
        const querySnapshot = await getDocs(collection(db, "blog"));

        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return data;
    } catch (error) {
        return null;
    }
}

async function deleteData(id) {
    try {
        await deleteDoc(doc(db, "blog", id));
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}

async function updateData(id, title, description) {
    const docRef = doc(db, "blog", id);
    await updateDoc(docRef, {
        title,
        description,
    });
}

export { addData, readDatabase, deleteData, updateData };
