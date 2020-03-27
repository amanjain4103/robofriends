import React  from 'react';
// import 'tachyons';
import './Card.css';


const Card = (props)=>{
    return (
        <div>
            <div className="cardStyle">
                <img className="CardImg" src={`https://robohash.org/${props.id}?100*100`} alt="this is a robot"/>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;