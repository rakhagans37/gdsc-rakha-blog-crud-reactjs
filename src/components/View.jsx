function View({ handleDelete, handleUpdate, title, description, date, imageUrl}) {
    return (
        <>
            <div className="w-screen flex-col items-center">
                <div className="flex flex-col pt-8 px-[420px] gap-8">
                    <div className="bg-[#B4B4B4] w-full h-60 rounded-md overflow-hidden">
                        <img src={imageUrl} alt="image" className="w-full h-full object-cover" />
                    </div>

                    {/* Keterangan */}
                    <div className="w-full flex flex-col gap-6 h-max items-start">
                        <h1 className="text-4xl font-bold font-sans text-start">{title}</h1>

                        <div className="w-full flex flex-row justify-between">
                            <h2>{date}</h2>
                            <div className="flex flex-row w-max gap-[25px]">
                                <button className="underline font-sans font-medium text-xl" onClick={handleUpdate}>Edit</button>
                                <span className=" border-r border-black"></span>
                                <button className="underline font-sans font-medium text-xl" onClick={handleDelete}>Hapus</button>
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
