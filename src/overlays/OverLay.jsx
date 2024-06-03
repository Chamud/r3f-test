// OverLay.jsx

import { useSnapshot } from "valtio";
import { store } from "../Store"

const Overlay = () => {

    const handleChange = (val) => {
        store.scene = val;
    };

    const snap = useSnapshot(store);

    return (
        <div className="select-container">
            <nav className="bg-white shadow-lg bg-opacity-5 rounded-full cursor-default">
                <div className="max-w-3xl mx-auto text-white font-semibold">
                    <div className="grid sm:grid-cols-3 text-lg gap-4 text-center py-4 px-8">
                        <div className={`py-2 ${snap.scene == 1 ? "bg-black bg-opacity-60" : "hover:bg-white hover:bg-opacity-5"} rounded-full`}>
                            <span onClick={() => handleChange(1)} className="hover:font-bold p-2">
                                Orbit Gallery
                            </span>
                        </div>
                        <div className={`py-2 ${snap.scene == 2 ? "bg-black rounded-full" : "hover:bg-white hover:bg-opacity-5"} rounded-full`}>
                            <span onClick={() => handleChange(2)} className="hover:font-bold p-2" >
                                Scene 2
                            </span>
                        </div>
                        <div className={`py-2 ${snap.scene == 3 ? "bg-black rounded-full" : "hover:bg-white hover:bg-opacity-5"} rounded-full`}>
                            <span onClick={() => handleChange(3)} className="hover:font-bold p-2">
                                Scene 3
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Overlay

