import React    from 'react';
import {Link} from 'react-router-dom';

function List(props){
    return(
    <div>
        {props.data.burgers.map(item=>
            <Link to={`/${item.name}`} key={item.id}>
                <div className='product' >
                    <img src={item.img} alt={item.name}/>
                    {item.name}
                </div>
            </Link>)
        }
    </div>)
}
export default List;