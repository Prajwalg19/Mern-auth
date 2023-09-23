import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInError, signInStarted, signInSuccess } from "../redux/userSlice";
function OAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function googleAuth() {
        try {
            const auth = getAuth(app);
            const provider = new GoogleAuthProvider();
            dispatch(signInStarted());
            let userCredentials = await signInWithPopup(auth, provider);
            let { displayName, photoURL, email, emailVerified } = userCredentials.user;
            if (emailVerified) {
                let response = await fetch("/api/auth/google", {
                    headers: {
                        "Content-type": "application/json",
                    },
                    method: "post",
                    body: JSON.stringify({ displayName, photoURL, email }),
                });
                response = await response.json();
                console.log(response);
                dispatch(signInSuccess(response));
                navigate("/");
            } else if (!emailVerified) {
                toast.error("Something went wrong");
                return;
            }
        } catch (err) {
            console.log(err.status);
            dispatch(signInError());
        }
    }

    return (
        <>
            <button onClick={() => googleAuth()} type="button" className="py-2 font-semibold text-white uppercase bg-red-700 rounded-md hover:shadow-md hover:bg-red-800 active:bg-red-900 transition ease-in-out">
                Continue with google
            </button>
        </>
    );
}

export default OAuth;
