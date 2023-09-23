import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
    const user = useSelector((store) => {
        return store.user?.currentUser;
    });
    return (
        <>
            <div className="w-full bg-slate-300 shadow-lg py-2 sticky top-0">
                <div className="flex max-w-6xl mx-auto items-center justify-between h-full px-8">
                    <Link to="/">
                        <div className="font-semibold text-lg">Main</div>
                    </Link>
                    <div>
                        <ul className="flex space-x-5 text-sm font-medium">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                {user?.photoURL ? (
                                    <Link to="/" className="flex justify-center items-center">
                                        <img className="rounded-full w-6 h-6 box-content" src={user.photoURL} />
                                    </Link>
                                ) : (
                                    ""
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
