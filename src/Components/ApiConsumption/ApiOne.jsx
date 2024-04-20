import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios"



const ApiOne = () => {
    const [getData, setGetData] =  useState([]);

    const  getApi = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setGetData(response.data);
    };

    useEffect(() => {
        getApi();
    }, []);

  return (
    <div>
        {getData.map((myData) => (
            <Card key={myData.id}>
                <p>
                    <b>Title</b>: 
                    {myData.title}
                </p>

                <p>
                    <b>Price</b>: 
                    ${myData.price}
                </p>

                <div>
                    <img src= {myData.image} alt="" />
                </div>
            </Card>
        ))}
    </div>
    
  )
}

export default ApiOne

const Card = styled.div`
    background-color: lightgrey;

    img {
        height: 200px;
        width: 200px;
        background-color: gray;
    }
`

const Wrapper = styled.div``