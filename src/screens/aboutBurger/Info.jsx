import React, {useState,useEffect } from 'react';
import Info from './Components/BurgerInfo/index'

function BurgerInfo(props){
    const [name,setName]=useState('');
    const type=props.match.url.split('/');
    useEffect(() => {
        setName(type);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div className='infoAboutBurger'>
            <Info name={name[2]}/>
        </div>
    );
  }

export default BurgerInfo;