import React from "react";

function Create({title, setTitle ,description, setDescription}) {
    return (
        <div className="flex w-screen justify-center">
            <div className="flex flex-col w-max pt-16 gap-9 items-start">
                <div className="flex border-b-2 w-full">
                    <h1 className="text-4xl font-bold pb-[18px]">Tambah Blog</h1>
                </div>
                <div className="flex flex-col gap-6">
                        <label htmlFor="" className="flex flex-col items-start gap-2">
                            <h2 className="text-base font-semibold">Judul</h2>
                            <input className="ring-[0.5px] ring-black rounded-[4px] w-[590px] h-[39px] focus:ring-4 focus:ring-blue-800 px-3 py-2" type="text" value={title} onChange={(event) =>{
                                setTitle(event.target.value);
                            }}/>
                        </label>

                        <label htmlFor="" className="flex flex-col items-start gap-2">
                            <h2 className="text-base font-semibold">Isi</h2>
                            <textarea className="rounded-[4px] w-[590px] h-[265px] ring-[0.5px] ring-black focus:ring-4 focus:ring-blue-800 px-3 py-2" type="text" value={description} onChange={(event) => {
                                setDescription(event.target.value);
                            }}/>
                        </label>
                </div>
            </div>
        </div>
    );
}

export default Create;
