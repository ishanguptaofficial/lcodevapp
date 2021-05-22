import React from 'react'

const ImageHelper = ({product}) => {
    const imageurl = product
    ? product.image 
    : `https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?cs=srgb&dl=pexels-pixabay-220201.jpg&fm=jpg`;
    
    return (
        <div className="rounded border border-success p-2">
            <img 
            src={imageurl}  
            style={{ maxHeight:"100%", maxWidth:"100%" }}
            className="mb-3 rounded"
            alt=""  
            />
        </div>
    )
}
export default ImageHelper