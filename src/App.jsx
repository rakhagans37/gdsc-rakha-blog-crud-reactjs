import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import UpdateBlog from "./pages/UpdateBlog.jsx";
import ViewBlog from "./pages/ViewBlog.jsx";
import {
    addData,
    readDatabase,
    deleteData,
    updateData,
} from "./database/Database.jsx";
import Loading from "./components/Loading.jsx";
import { uploadImage, getImage, deleteImage } from "./storage/storage.jsx";

function App() {
    const [dataCard, setDataCard] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const mergeData = getAllData();

        mergeData.then((data) => {
            setDataCard(data);
            setIsLoading(false);
        });
    }, []);

    async function getAllData() {
        const mergeData = readDatabase().then((data) => {
            const promises = data.map((item) => {
                return getImage(item.image).then((url) => {
                    item.imageUrl = url;
                });
            });
            return Promise.all(promises).then(() => data);
        });

        return mergeData;
    }

    function handleCreate(title, description, image) {
        if (!title.trim() || !description.trim()) {
            throw new Error("Judul dan isi tidak boleh kosong!");
        } else if (!image) {
            throw new Error("Gambar tidak boleh kosong!");
        } else if (!/^image\/(jpeg|png|jpg)$/.test(image.type)) {
            throw new Error(
                "Hanya boleh mengupload gambar dengan format .jpeg, .jpg, atau .png!"
            );
        }

        // Update data after adding new data
        uploadImage(new File([image], image.name, { type: image.type }))
            .then(() => addData(title, description, image.name))
            .then(() => {
                window.location.reload();
            });
    }

    function handleDelete(id, imageName) {
        // Delete data after clicking delete button
        deleteImage(imageName)
            .then(() => deleteData(id))
            .then(() => window.location.reload());
    }

    function handleUpdate(id, newTitle, newDescription) {
        if (!newTitle.trim() || !newDescription.trim()) {
            throw new Error("Judul dan isi tidak boleh kosong!");
        }

        // Update data after adding new data
        updateData(id, newTitle, newDescription).then((_data) => {
            window.location.reload();
        });
    }

    if (isLoading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home dataCard={dataCard} handleDelete={handleDelete} />
                    }
                />
                <Route
                    path="/createblog"
                    element={<CreateBlog handleCreate={handleCreate} />}
                />
                <Route
                    path="/updateblog"
                    element={
                        <UpdateBlog
                            dataCard={dataCard}
                            handleUpdate={handleUpdate}
                        />
                    }
                />
                <Route
                    path="/viewblog"
                    element={
                        <ViewBlog
                            dataCard={dataCard}
                            handleDelete={handleDelete}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
