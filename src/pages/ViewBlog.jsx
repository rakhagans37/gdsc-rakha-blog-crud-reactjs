import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import View from "../components/View";

function ViewBlog({ dataCard, handleDelete }) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const id = searchParams.get("id");
    const dataView = dataCard.find((item) => item.id === id);
    const date = new Date(dataView.date);
    const formattedDate = date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    const title = dataView.title;
    const description = dataView.description;
    const imageUrl = dataView.imageUrl;
    // End of getting date, title, and description

    //Function to handle update and delete
    function goToUpdate(id) {
        navigate(`/updateblog?id=${id}`);
    }

    function deleteBlog(id, imageName) {
        handleDelete(id, imageName);
        navigate("/");
    }
    // End of function to handle update and delete

    // Rendering
    return (
        <>
            <Header />
            <View
                handleDelete={() => deleteBlog(id, dataView.image)}
                handleUpdate={() => goToUpdate(id)}
                title={title}
                description={description}
                date={formattedDate}
                imageUrl={imageUrl}
            />
        </>
    );
}

export default ViewBlog;
