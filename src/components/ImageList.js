import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {

  const images = props.images.map((image) => {
    // assign key to root element that we are returning list of records
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList
