// ShowImage.jsx

import { useSnapshot } from "valtio";
import { store } from "./Store"

export function ShowImage() {
    const snapshot = useSnapshot(store)

    const handleClick = () => {
        store.image = ''
    }

    if (!snapshot.image) {
        return null
    }

    return (
        <div className="image-close" onClick={handleClick}>
            <div className="image-container" >
                <img src={snapshot.image} />
            </div>
        </div>
    );
}



