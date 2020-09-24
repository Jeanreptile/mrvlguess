import React from 'react';
import './ImageCard.css';

function ImageCard(props: {imgUrl: string}) {

  return (
    <div>
      <div className="ImageCard-Wrapper" style={{backgroundImage: `url(${props.imgUrl})`}}>
      </div>
    </div>
  )
}

export default ImageCard;