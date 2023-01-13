import React from 'react'
import { useRouter } from 'next/router'

import { useQuery } from 'react-query';
import axios from 'axios';
import SingleDetail from 'src/components/singleDetail';



const CardDetail = () => {
    const router = useRouter()
    const { id } = router.query

    const options = {
        method: 'GET',
        url: `https://gamerpower.p.rapidapi.com/api/giveaway`,
        params: { id: id },
        headers: {
            'X-RapidAPI-Key': '965f6d1f32mshf4a14ac7d5ca9fap1bb69djsnf72a39ceb0ac',
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
        },
    };

    const { isLoading, error, data } = useQuery(['getSingleData'], () =>
        axios
            .request(options)
            .then((response) => {
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            })
    );

    if (isLoading) return <div style={{color:"white"}}>Loading...</div>;
    if (error) return <>An error has occurred: </>;

    return (
        <SingleDetail data={data} />
    );
}

export default CardDetail