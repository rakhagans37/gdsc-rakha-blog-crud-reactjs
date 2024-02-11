import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Update from "../components/Update";
import ErrorCard from "../components/ErrorCard";

function UpdateBlog({ dataCard, handleUpdate }) {
    const [searchParams] = useSearchParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Getting data
    let id = searchParams.get("id");
    let dataView = dataCard.find((item) => item.id === id);
    // End of getting data

    // Set title and description
    useEffect(() => {
        if (dataView) {
            setTitle(dataView.title);
            setDescription(dataView.description);
        }
    }, []);
    // End of set title and description

    // Function to handle update
    function handleSubmit(event) {
        event.preventDefault();

        // Reset error message
        try {
            handleUpdate(id, title, description);
            navigate("/");
        } catch (error) {
            // Set error message
            setError(error.message);
        }
    }
    // End of function to handle update

    return (
        <>
            <Header handleSubmit={handleSubmit} />
            <ErrorCard message={error} />
            <Update
                title={title}
                description={description}
                setTitle={setTitle}
                setDescription={setDescription}
            />
        </>
    );
}

export default UpdateBlog;
