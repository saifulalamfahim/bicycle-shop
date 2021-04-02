
import React from 'react';
import { useHistory } from 'react-router';
import './Card.css';


const Card = ({curd}) => {

  const history = useHistory();
  const showDetails = id => {
    const url = `/curds/${curd._id}`;
    history.push(url);
  }

    return (
        <div className="col-md-3">

<div className="p-3">
            <div className="card cartBicycle">
                <div className="d-flex justify-content-center bg-info">
                    <img src={curd.imageURL} className="" alt="" />
                </div>
                <div className="card-body text-dark text-center bg-info">
                    <p className="card-text text-center"><strong>{curd.name}</strong></p>
                    <button onClick={() => showDetails(curd._id)} className="bg-danger">Buy Now</button>
                    
                </div>
            </div>
            </div>
          
        </div>
    );
};

export default Card;