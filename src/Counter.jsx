import { useContext } from "react";

import Context from "./Context";

export default function Counter(){
    const [total, setTotal] = useContext(Context);

    return (
        <div>
            <h3>{total}</h3>
            <button onClick={() => setTotal(total + 1)}>Counter</button>
        </div>
    )
}