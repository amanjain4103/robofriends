import React from 'react';
import Card from './Card';
// import {Users} from './Users';

const CardList =({Users})=>{
    return (
        <div className="cardContainer">
            {
                Users.map((userx,i)=>{
                    return <Card key={Users[i].id} name={Users[i].name} email={Users[i].email} id={Users[i].id}/> 
                })
            }


            {/* <Card name={Users[0].name} email={Users[0].email}/> */}
            {/* <Card name={Users[1].name} email={Users[1].email}/> */}
        </div>
    )
}

export default CardList;