import { Link } from "react-router-dom";
function Header() {
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
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
