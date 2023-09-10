import { Link } from "react-router-dom";

function SignIn() {
    return (
        <>
            <div className="max-w-lg px-3 mx-auto">
                <p className="mt-6 mb-6 text-2xl font-bold text-center">Sign In</p>
                <form className="flex flex-col gap-3">
                    <input type="email" id="email" placeholder="Email" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />
                    <input type="password" id="pass" placeholder="Password" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />

                    <button className="py-2 font-semibold text-white uppercase bg-gray-700 rounded-md hover:shadow-md hover:bg-gray-800 active:bg-gray-900 transition ease-in-out">Sign In</button>
                    <button className="py-2 font-semibold text-white uppercase bg-red-700  rounded-md hover:shadow-md hover:bg-red-800 active:bg-red-900 transition ease-in-out">Continue with google</button>
                    <p className="text-md flex gap-3 mt-3">
                        Don't have an account?{"  "}
                        <Link to="/signup" className="text-blue-600">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default SignIn;
