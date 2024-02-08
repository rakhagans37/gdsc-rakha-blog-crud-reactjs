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

function App() {
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("dataCard");
        if (data) {
            setDataCard(JSON.parse(data));
        }   
    }, []);

    function handleCreate(title, description) {
        const dateCreate = new Date();
        const newData = [
            ...dataCard,
            {
                id: dataCard.length + 1,
                title: title,
                description: description,
                date: dateCreate,
            },
        ];
        
        setDataCard(newData);
        localStorage.setItem("dataCard", JSON.stringify(newData));
    }

    function handleDelete(id) {
        const newData = dataCard.filter((item) => item.id != id);
        setDataCard(newData);
        localStorage.setItem("dataCard", JSON.stringify(newData));
    }

    function handleUpdate(id, newTitle, newDescription) {
        const data = Array(...dataCard)

        // Updating data depends on id
        data.map((item) => {
            if (item.id == id) {
                item.title = newTitle;
                item.description = newDescription;
            }
        });

        setDataCard(data);
        localStorage.setItem("dataCard", JSON.stringify(data));
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home dataCard={dataCard} handleDelete={handleDelete}/>} />
                <Route
                    path="/createblog"
                    element={<CreateBlog handleCreate={handleCreate} />}
                />
                <Route
                    path="/updateblog"
                    element={<UpdateBlog handleUpdate={handleUpdate} />} 
                />
                <Route 
                    path="/viewblog"
                    element={<ViewBlog handleDelete={handleDelete} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
