import { Outlet, Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function Header({ handleSubmit }) {
    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/viewblog"
    ) {
        return (
            <>
                <div className="sticky top-0 z-40 w-screen backdrop-blur-sm flex-none transition-colors duration-500 
                lg:z-5 border-b-2">
                    <div className="flex justify-between px-9 py-6">
                        <Link to={"/"} className="text-blue-950 text-2xl font-semibold">
                            Blog GDSC Telyu
                        </Link>
                        <button className="py-2 px-6 bg-blue-950 text-white rounded">
                            <Link to="/createblog">Buat Blog</Link>
                        </button>
                    </div>
                </div>

                <Outlet />
            </>
        );
    } else if (window.location.pathname === "/createblog") {
        return (
            <>
                <div className=" w-screen border-b-2">
                    <div className="flex justify-between px-9 py-6">
                        <button>
                            <div>
                                <Link
                                    to="/"
                                    className="flex flex-row items-center gap-1"
                                >
                                    <IoChevronBack size={32} />
                                    <span className="text-base font-semibold">
                                        Kembali
                                    </span>
                                </Link>
                            </div>
                        </button>
                        <button
                            className="py-2 px-6 bg-blue-950 text-white rounded"
                            onClick={handleSubmit}
                        >
                            Konfirmasi & Selesai
                        </button>
                    </div>
                </div>

                <Outlet />
            </>
        );
    } else if (window.location.pathname === "/updateblog") {
        return (
            <>
                <div className=" w-screen border-b-2">
                    <div className="flex justify-between px-9 py-6">
                        <button>
                            <div>
                                <Link
                                    to="/"
                                    className="flex flex-row items-center gap-1"
                                >
                                    <IoChevronBack size={32} />
                                    <span className="text-base font-semibold">
                                        Kembali
                                    </span>
                                </Link>
                            </div>
                        </button>
                        <button
                            className="py-2 px-6 bg-blue-950 text-white rounded"
                            onClick={handleSubmit}
                        >
                            Konfirmasi & Selesai
                        </button>
                    </div>
                </div>

                <Outlet />
            </>
        );
    }
}

export default Header;
