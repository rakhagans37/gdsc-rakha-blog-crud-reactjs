import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({id, title, description, imageUrl, handleDelete, handleUpdate}) {
    const descriptionSlice = description.slice(0,55) + "..."

    return (
        <div className="w-72 h-max flex flex-col rounded-md bg-[#EDEDED] overflow-hidden shadow-md">
            <Link to={`/viewblog?id=${id}`} className="w-full h-48 bg-[#B4B4B4]">
                <img src={imageUrl} alt="thumbnail" className="w-full h-full object-cover"/>
            </Link>
            <div className="px-3 flex flex-col">
                <Link to={`/viewblog?id=${id}`} className="py-3 border-b-2 border-[rgba(0, 0, 0, 0.2)]">
                    <h1 className="text-black font-bold text-left text-xl font-sans">{title}</h1>
                    <p className="text-black font-normal text-left text-sm mt-1 font-sans break-all">{descriptionSlice}</p>
                </Link>
                <div className="flex flex-row justify-between py-3">
                    <button className="underline font-medium text-sm font-sans" onClick={handleUpdate}>Edit</button>
                    <button className="underline font-medium text-sm font-sans" onClick={handleDelete}>Hapus</button>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}

export default Card;
