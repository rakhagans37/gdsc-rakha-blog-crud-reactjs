import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Create from "../components/Create";
import Header from "../components/Header";
import ErrorCard from "../components/ErrorCard";

function CreateBlog({ handleCreate }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        try {
            event.preventDefault();
            handleCreate(title, description);
            navigate("/");
        } catch (error) {
            setError(<ErrorCard message={error.message} />);
        }
    };

    return (
        <>
            <Header handleSubmit={handleSubmit} />
            {error}
            <Create
                title={title}
                description={description}
                setTitle={setTitle}
                setDescription={setDescription}
            />
        </>
    );
}

export default CreateBlog;
