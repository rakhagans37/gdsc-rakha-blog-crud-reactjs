import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from "firebase/storage";
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// 'file' comes from the Blob or File API
async function uploadImage(file) {
    // Create a storage reference from our storage service
    const storageRef = ref(storage, "thumbnails/" + file.name);
    await uploadBytes(storageRef, file);
}

async function getImage(imageName) {
    const starsRef = ref(storage, "thumbnails/" + imageName);
    return getDownloadURL(starsRef)
        .then((url) => {
            // Insert url into an <img> tag to "download"
            return url;
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case "storage/object-not-found":
                    // File doesn't exist
                    break;
                case "storage/unauthorized":
                    // User doesn't have permission to access the object
                    break;
                case "storage/canceled":
                    // User canceled the upload
                    break;
                case "storage/unknown":
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
}

async function deleteImage(imageName) {
    const storageRef = ref(storage, "thumbnails/" + imageName);
    await deleteObject(storageRef);
}

export { uploadImage, getImage, deleteImage };
