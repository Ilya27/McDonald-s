import React, { useState, useEffect } from 'react';


function Info(props){
    useEffect(() => {
        let type=props.match.url.split('/');
        console.log(type);
        
    });
    return (
        <div>
           
        </div>
    );
  }

export default Info;