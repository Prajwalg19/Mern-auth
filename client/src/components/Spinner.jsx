import { MoonLoader } from "react-spinners";

function spinner() {
    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-1">
                <MoonLoader />{" "}
            </div>
        </>
    );
}

export default spinner;
