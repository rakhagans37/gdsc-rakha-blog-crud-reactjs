import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import View from "../components/View";
import { useState } from "react";

function ViewBlog({handleDelete}) {
    const [searchParams]= useSearchParams();
    const [id] = useState(searchParams.get("id"));

    //Getting storage
    const [data] = useState(JSON.parse(localStorage.getItem("dataCard")));
    const [dataView] = useState(data.filter((item) => item.id == id)[0]);

    // Getting date
    const [date] = useState(new Date(dataView.date));
    const [formattedDate] = useState(date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }));

    // Getting tittle, description
    const [title] = useState(dataView.title);
    const [description] = useState(dataView.description);
    
    return (
        <>
            <Header />
            <View 
                id={id}
                handleDelete={handleDelete}
                title={title}
                description={description}
                date={formattedDate}
            />
        </>
    );
}

export default ViewBlog;
