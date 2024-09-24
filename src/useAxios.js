import { useState } from 'react';
import {v1 as uuid} from "uuid";
import axios from 'axios';

const useAxios = (URL) => {
    const [response, setResponse] = useState([]);

    const handleSetResponse = async (params) => {
        try {
            const res = await axios.get(params ? `${URL}/${params}` : URL);
            setResponse(response => [...response, { ...res.data, id: uuid()}]);
        } catch (error){
            console.log(error);
        }
        // handleSetResponse();
    };
    // handleSetResponse();

    return [response, handleSetResponse];
}

export default useAxios;
