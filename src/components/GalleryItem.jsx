import React from 'react'
/*
Item will receive a prop = {img, description, orientLeft}

orientLeft = true [img on left]
           = false [img on right]

use dynamic styling 

in homepage.jsx ::> import data from .js file and create an array of gallery items and then render them.
*/
export default function GalleryItem(){
    return (
        <div className="galleryItem">
            <h1>Gallery Item</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus esse ut unde, qui maiores dolorum obcaecati quaerat id, cupiditate voluptatum aut quo ab libero nihil architecto, quisquam voluptatem provident.</p>
        </div>
    )
}