import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Create from "../components/Create";
import Header from "../components/Header";
import ErrorCard from "../components/ErrorCard";

function CreateBlog({ handleCreate }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Function to handle create
    function handleSubmit(event) {
        event.preventDefault();

        // Reset error message
        try {
            handleCreate(title, description, image)
        } catch (error) {
            // Set error message
            setError(error.message);
        }
    }
    // End of function to handle create

    // Rendering
    return (
        <>
            <Header handleSubmit={handleSubmit} />
            <ErrorCard message={error} />
            <Create
                title={title}
                description={description}
                image={image}
                setImage={setImage}
                setTitle={setTitle}
                setDescription={setDescription}
            />
        </>
    );
}

export default CreateBlog;
