import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    useSearchParams,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import { useEffect, useState } from "react";
import UpdateBlog from "./pages/UpdateBlog.jsx";
import ViewBlog from "./pages/ViewBlog.jsx";
import { addData , readDatabase, deleteData, updateData } from "./database/Database.jsx";

function App() {
    const getData = readDatabase();
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        getData.then((data) => {
            setDataCard(data);
        });
    }, []);

    function handleCreate(title, description) {
        const newData = readDatabase();
        addData(title, description);
        newData.then((data) => {
            setDataCard(data);
        });
    }

    function handleDelete(id) {
        deleteData(id);
        const newData = readDatabase();
        newData.then((data) => {
            setDataCard(data);
        });
    }

    function handleUpdate(id, newTitle, newDescription) {
        updateData(id, newTitle, newDescription);
        const newData = readDatabase();
        newData.then((data) => {
            setDataCard(data);
        });
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
                    element={<UpdateBlog dataCard={dataCard} handleUpdate={handleUpdate} />}
                />
                <Route
                    path="/viewblog"
                    element={<ViewBlog dataCard={dataCard} handleDelete={handleDelete} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
