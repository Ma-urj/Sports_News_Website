import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../features/axios'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

function Fixtures() {
    const [innercontent, setInnerContent] = useState();
    const params = useParams();


    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(`/${params.sportname}/fixtures`);

            setInnerContent(req.data);
        }
        

        fetchData();
    },[]);

    return (
        <div>
            {innercontent}
        </div>
    )
}

export default Fixtures
