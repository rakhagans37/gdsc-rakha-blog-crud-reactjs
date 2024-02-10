import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Update from "../components/Update";

function UpdateBlog({dataCard, handleUpdate}) {
    const [searchParams] = useSearchParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let id = searchParams.get("id");
    let dataView = dataCard.filter((item) => item.id == id)[0];

    useEffect(() => {
        if (dataView) {
            setTitle(dataView.title);
            setDescription(dataView.description);
        }
    }, []);
    
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