import { useNavigate } from "react-router-dom";

function View({ id, handleDelete, title, description, date}) {
    // Navigate
    const navigate = useNavigate();

    //Function to handle update and delete
    function goToUpdate() {
        navigate(`/updateblog?id=${id}`)
    }

    function deleteBlog(){
        handleDelete(id);
        navigate('/');
    }

    return (
        <>
            <div className="w-screen flex-col items-center">
                <div className="flex flex-col pt-8 px-[420px] gap-8">
                    <div className="bg-[#B4B4B4] w-full h-60 rounded-md">

                    </div>

                    {/* Keterangan */}
                    <div className="w-full flex flex-col gap-6 h-max items-start">
                        <h1 className="text-4xl font-bold font-sans text-start">{title}</h1>

                        <div className="w-full flex flex-row justify-between">
                            <h2>{date}</h2>
                            <div className="flex flex-row w-max gap-[25px]">
                                <button className="underline font-sans font-medium text-xl" onClick={() => {goToUpdate()}}>Edit</button>
                                <span className=" border-r border-black"></span>
                                <button className="underline font-sans font-medium text-xl" onClick={() => {deleteBlog()}}>Hapus</button>
                            </div>
                        </div>

                        <p className="text-start text-base font-medium break-all">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View;
