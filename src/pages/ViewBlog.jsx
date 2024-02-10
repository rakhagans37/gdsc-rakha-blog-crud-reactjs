import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import View from "../components/View";
import { useState } from "react";

function ViewBlog({ dataCard, handleDelete }) {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    //Getting storage
    const dataView = dataCard.filter((item) => item.id == id)[0] || {};

    // Getting date
    const date = new Date(dataView.date);
    const formattedDate = date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    // Getting tittle, description
    const title = dataView.title;
    const description = dataView.description;

    // Navigate
    const navigate = useNavigate();

    //Function to handle update and delete
    function goToUpdate(id) {
        navigate(`/updateblog?id=${id}`);
    }

    function deleteBlog(id) {
        handleDelete(id);
        navigate("/");
    }

    return (
        <>
            <Header />
            <View
                id={id}
                handleDelete={deleteBlog}
                handleUpdate={goToUpdate}
                title={title}
                description={description}
                date={formattedDate}
            />
        </>
    );
}

export default ViewBlog;
