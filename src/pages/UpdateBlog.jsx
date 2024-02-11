import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Update from "../components/Update";
import ErrorCard from "../components/ErrorCard";

function UpdateBlog({dataCard, handleUpdate}) {
    const [searchParams] = useSearchParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

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
        try {
            handleUpdate(id, title, description);
            navigate("/");
        } catch (error) {
            setError(<ErrorCard message={error.message} />);
        }
    }

    return (
        <>
            <Header handleSubmit={handleSubmit} />
            {error}
            <Update title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
        </>
    );
}

export default UpdateBlog;