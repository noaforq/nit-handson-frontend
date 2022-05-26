import React, { useState } from 'react';
import axios from 'axios';

export const SampleComponent = () => {
    const [data, setData] = useState("");
    const get_cosmosdata = () => {
        axios
            .get("https://nit-handson0523-apim.azure-api.net/api/HttpTrigger1", { headers: { "Ocp-Apim-Subscription-Key": "784ae80e09564164ab126133d0edb797" } })
            .then(response => {
                setData(response.data);
            });
    }
    return (
        <>
            <hr />
            <input type="button" value="CosmosDBのデータを取得する" onClick={get_cosmosdata} />
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
    );
}