import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { signInStarted, signInSuccess, signInError } from "../redux/userSlice.js";
function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [loading, setLoading] = useState(null);
    const { isLoading } = useSelector((store) => {
        return store.firstSlice; //gets the state of the firstSlice
    });
    const [data, setData] = useState({
        email: "",
        pass: "",
    });
    const { email, pass } = data;
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
            toast.error("Enter the credentials!!");
            return;
        }
        dispatch(signInStarted());
        try {
            let response = await fetch("/api/auth/signin", {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            });
            response = await response.json();
            if (response.success == true) {
                dispatch(signInSuccess(response));
                navigate("/");
                toast.dismiss();
                toast.success(`Signed in as ${response.data.userName}`);
            } else if (response.success == false) {
                dispatch(signInError(response.message));
                toast.dismiss();
                toast.error(response.message);
            }
        } catch (error) {
            dispatch(signInError(error.message));
            toast.error(error.message);
        }
    }

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <>
            <div className="max-w-lg px-3 mx-auto">
                <p className="mt-6 mb-6 text-2xl font-bold text-center">Sign In</p>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <input onChange={onChange} type="email" id="email" value={email} placeholder="Email" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />
                    <input onChange={onChange} type="password" value={pass} id="pass" placeholder="Password" className="p-3 border border-gray-400 bg-slate-100 rounded-md" />

                    <button className="py-2 font-semibold text-white uppercase bg-gray-700 rounded-md hover:shadow-md hover:bg-gray-800 active:bg-gray-900 transition ease-in-out">Sign In</button>
                    <OAuth />
                    <p className="flex mt-3 text-md gap-3">
                        Don't have an account?
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
