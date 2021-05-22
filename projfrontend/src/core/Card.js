import React, {useState} from 'react'
import ImageHelper from './helper/imageHelper';
import {Redirect} from "react-router-dom";
import {addItemToCart, removeItmeFromCart} from "./helper/cartHelper";
import {isAuthenticated} from "../auth/helper"
// Deal this later

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = true,
  reload = undefined,
  setReload = f => f,
  // function(f){
  //  return f
  //}

  }) => {

  const [redirect, setRedirect] = useState(false)

  const cartTitle = product ? product.name : "A Photo from pexels"
  const cartDesc = product ? product.description : "Deafult description"
  const cartPrice = product ? product.price : "Default 50"

  const addToCart = () => {
    if (isAuthenticated()){
      addItemToCart(product, () => setRedirect(true));
      console.log("Add to Cart")
    }else{
      console.log("Login Please ! ")
    }
  };
  
  const getAredirect = (redirect) => {
    if(redirect){
      return <Redirect to="/cart" />
    }
  }

  const showAddToCart = addToCart => {
    return(
      addtoCart && (
        <button
        onClick={addToCart}
        className="btn btn-block btn-outline-success mt-2 mb-2"
        >
        Add to cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return(
      removeFromCart && (
        <button
        onClick={() => {
          removeItmeFromCart(product.id)
          setReload(!reload)
          console.log("product removed from cart")
        }}
        className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
        Remove From Cart
        </button>
      )
    );
  };
  
  
  return (
    <div className="card text-white bg-dark border border-info">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
      {getAredirect(redirect)}
        <div className="rounded border border-success p-2">
          <ImageHelper product={product} />
        </div>
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDesc}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">
            {showAddToCart(addToCart)}
          </div>
          <div className="col-12">
            {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

