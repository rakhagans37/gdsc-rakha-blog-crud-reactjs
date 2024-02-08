import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Create from "../components/Create";
import Header from "../components/Header";


function CreateBlog({ handleCreate }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleCreate(title, description);
        navigate('/');
    }

    return (
        <>
            <Header handleSubmit={handleSubmit} />
            <Create title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
        </>
    );
}

export default CreateBlog;
