import React from "react";

const ErrorCard = ({ message }) => {
    if (!message) return null;
    return (
        <div className="w-screen flex justify-center mt-4">
            <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-[70vw]"
                role="alert"
            >
                <strong className="font-bold">Perhatian: </strong>
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    );
};

export default ErrorCard;
