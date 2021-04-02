import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const PlaceOrder = () => {
    const [placeOrder, setPlaceOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://thawing-woodland-11369.herokuapp.com/Order?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setPlaceOrder(data));
    }, [])

    return (
        <div>
            <h3>You Have : {placeOrder.length} order</h3>
            {
                placeOrder.map(order => <li className="m-5"> <b>Your Name:</b>{order.name}<br></br><b>Date:</b>{order.checkIn}<br></br><b>Product Code:</b>{order._id} <br></br><b>Price:</b>{order.price}</li>)
            }
        </div>
    );
};

export default PlaceOrder;