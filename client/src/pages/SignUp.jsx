import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function SignUp() {
    const [data, setData] = useState({
        userName: "",
        email: "",
        pass: "",
    });
    const navigate = useNavigate();
    const { userName, email, pass } = data;
    const [loading, setLoading] = useState(false);
    function onChange(e) {
        setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const response = await fetch("/api/auth/signup", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
        let js = await response.json();
        setLoading(false);
        if (js.success == false) {
            toast.dismiss();
            toast.error("Oops!!");
        } else {
            toast.success("Sign Up Successful");
            navigate("/");
        }
    }
    if (loading) {
        return <Spinner />;
    }
    return (
        <>
            <div className="max-w-lg px-3 mx-auto">
                <p className="mt-6 mb-6 text-2xl font-bold text-center">Sign up</p>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <input onChange={onChange} type="text" id="userName" placeholder="Username" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />
                    <input onChange={onChange} type="email" id="email" placeholder="Email" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />
                    <input onChange={onChange} type="password" id="pass" placeholder="Password" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />

                    <button disabled={loading} className="py-2 font-semibold text-white uppercase bg-gray-700 rounded-md hover:shadow-md hover:bg-gray-800 active:bg-gray-900 transition ease-in-out">
                        Sign up
                    </button>
                    <OAuth />
                    <p className="flex mt-3 text-md gap-2">
                        Have an account?{"  "}
                        <Link to="/signin" className="text-blue-600">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default SignUp;
