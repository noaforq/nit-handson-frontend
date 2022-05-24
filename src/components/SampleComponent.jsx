import React, { useState } from 'react';
import axios from 'axios';

export const SampleComponent = (props) => {
    const [data, setData] = useState("");
    const get_data = () => {
        axios
            .get("https://nit-handson2-apim.azure-api.net/api/HttpTrigger1", 
                { 
                    headers: { 
                        "Ocp-Apim-Subscription-Key": "9913cd567c9044bfbe904ae6e46c20d3" 
                    }
                })
            .then((response) => { setData(JSON.stringify(response.data, null, "\t")); });
    };
    return (
        <>
            <hr />
            <input type="button" value="CosmosDBのデータを取得する" onClick={get_data} />
            <pre>
                {data}
            </pre>
        </>
    );
}