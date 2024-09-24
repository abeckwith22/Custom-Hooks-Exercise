import { useState } from "react";

/** flips the state of operand */
const useFlip = (initialState=true) => { // initially true
    const [state, setState] = useState(initialState);

    const flipState = () => {
        setState(state => !state);
    }

    return [state, flipState];
}

export default useFlip;
