import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Update from "../components/Update";

function UpdateBlog({handleUpdate}) {
    const [data] = useState(JSON.parse(localStorage.getItem("dataCard")));
    const [searchParams] = useSearchParams();

    const [id] = useState(searchParams.get("id"));
    const [dataView] = useState(data.filter((item) => item.id == id)[0]);
    const [title, setTitle] = useState(dataView.title);
    const [description, setDescription] = useState(dataView.description);
    console.log(dataView);

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleUpdate(id, title, description);
        navigate('/');
    }

    return (
        <>
            <Header handleSubmit={handleSubmit} />
            <Update title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
        </>
    );
}

export default UpdateBlog;