import React from 'react';
import { useNavigate } from 'react-router-dom';


const OrderSuccess = () => {
  const navigate=useNavigate()
  const handleclick=(e)=>{
    navigate('/')
    
  }
  return (
    <div className="container" onClick={handleclick}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="fw-bold mb-4">Order Successful!</h2>
              <p>Your order has been successfully placed. Thank you for your purchase!</p>
              <p>We'll send you a confirmation email shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
