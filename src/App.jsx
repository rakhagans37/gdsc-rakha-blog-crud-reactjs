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
import ErrorCard from "./components/ErrorCard.jsx";

function App() {
    const [dataCard, setDataCard] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        readDatabase().then((data) => {
            if (data) {
                setDataCard(data);
                setIsLoading(false);
            }
        });
    }, []);

    if (isLoading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loading />
            </div>
        );
    }

    function handleCreate(title, description) {
        if (!title.trim() || !description.trim()) {
            throw new Error("Judul dan isi tidak boleh kosong!");
        }

        // Update data after adding new data
        addData(title, description);
        readDatabase().then((data) => setDataCard(data));
    }

    function handleDelete(id) {
        deleteData(id);

        // Update data after deleting data
        window.location.reload();
    }

    function handleUpdate(id, newTitle, newDescription) {
        if (!newTitle.trim() || !newDescription.trim()) {
            throw new Error("Judul dan isi tidak boleh kosong!");
        }

        // Update data after adding new data
        updateData(id, newTitle, newDescription);
        readDatabase().then((data) => setDataCard(data));
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
