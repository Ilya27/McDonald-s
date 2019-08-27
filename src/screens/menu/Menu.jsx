import React, { useState, useEffect } from 'react';
import List from './Components/List/index'

function Menu(){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ilya27/demo-server/db')
        .then(data=>data.json())
        .then(data=>{setData(data);console.log(data)})
    },[]);
    return (
        <div>
            {data != null ? <div><List data={data} /></div>:<div>Hi</div>}
        </div>
    );
  }

export default Menu;