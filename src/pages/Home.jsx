import { useState } from "react";
import Card from "../components/Card.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";

function Home({ dataCard, handleDelete }) {
    const navigate = useNavigate();

    // Function to handle clicked update
    function goToUpdate(id) {
        navigate(`/updateblog?id=${id}`)
    }
    // End of function to handle update

    // Rendering
    return (
        <>
            <Header />
            <div className="p-10 flex flex-col w-screen items-center justify-center gap-16">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[40px] font-bold">Selamat Datang di Blog Saya!</h1>
                    <h2 className="text-base font-medium">Ini adalah tempat saya menulis blog</h2>
                </div>
                <div className="grid grid-cols-4 gap-20 ">
                    {dataCard.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            handleDelete={() => handleDelete(item.id)}
                            handleUpdate={() => goToUpdate(item.id)}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
