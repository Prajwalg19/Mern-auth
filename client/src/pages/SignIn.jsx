import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-spinner";
function SignIn() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState({
        email: "",
        pass: "",
    });
    function onChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (data.email == "" || data.pass == "") {
            toast.dismiss();
            toast.error("Enter the credentials");
            return;
        }
        setLoading(true);
        let response = await fetch("/api/auth/signin", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
        response = await response.json();
        if (response.success == true) {
            setLoading(false);
            navigate("/");
            toast.dismiss();
            toast.success(`Signed In ${response.body.userName}`);
        }
        if (response.success == false) {
            setLoading(false);
            toast.dismiss();
            toast.error(response.message);
        }
    }
    if (loading) {
        return <Spinner />;
    }
    return (
        <>
            <div className="max-w-lg px-3 mx-auto">
                <p className="mt-6 mb-6 text-2xl font-bold text-center">Sign In</p>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <input onChange={onChange} type="email" id="email" placeholder="Email" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />
                    <input onChange={onChange} type="password" id="pass" placeholder="Password" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />

                    <button className="py-2 font-semibold text-white uppercase bg-gray-700 rounded-md hover:shadow-md hover:bg-gray-800 active:bg-gray-900 transition ease-in-out">Sign In</button>
                    <OAuth />
                    <p className="flex mt-3 text-md gap-3">
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
