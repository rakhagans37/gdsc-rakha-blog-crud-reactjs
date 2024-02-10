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
import {
    addData,
    readDatabase,
    deleteData,
    updateData,
} from "./database/Database.jsx";
import Loading from "./components/Loading.jsx";

function App() {
    const [dataCard, setDataCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = readDatabase();
        getData.then((data) => {
            setDataCard(data);
        });

        if(dataCard){
            setTimeout(() => setIsLoading(false), 1000)
        }
    }, []);

    if (isLoading) {
        return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Loading/>
        </div>
        )
    }

    function handleCreate(title, description) {
        // Update data after adding new data
        addData(title, description);

        const newData = readDatabase();
        newData.then((data) => {
            setDataCard(data);
        });
    }

    function handleDelete(id) {
        deleteData(id);

        // Update data after deleting data
        const newData = readDatabase();
        newData.then((data) => {
            setDataCard(data);
        });
    }

    function handleUpdate(id, newTitle, newDescription) {
        updateData(id, newTitle, newDescription);

        // Update data after updating data
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
