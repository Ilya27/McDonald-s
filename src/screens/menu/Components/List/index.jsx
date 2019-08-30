import React    from 'react';
import {Link} from 'react-router-dom';
import './style.css'
const List=(props)=>{
    return(
    <div>
        {props.burgers.map(item=>
            <Link to={`/about/${item.name}`} key={item.id}>
                <div className='product' >
                    <div>
                        <h2>{item.name}</h2>
                    </div>
                    <div className='imgBurger'>
                        <img src={item.img} alt={item.name}/>
                    </div>
                </div>
            </Link>)
        }
    </div>)
}
export default List;