import React, { useEffect, useState } from 'react';
import Navbar from '../../../containers/navbar';

import './imageCarousel.css'

const ImageCarousel = () => {

    const [carouselImageList, setCarouselImageList] = useState([
        {id: 0, url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 1, url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 2, url: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 3, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id: 4, url: 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    ])

    const [carouselItemIndex, setCarouselItemIndex] = useState(0)

    useEffect(() => {
        if(carouselImageList.length){
            const timeoutId = setTimeout(() => setCarouselItemIndex(prev => prev < (carouselImageList.length - 1) ? prev + 1 : 0), '4000')
            return () => clearTimeout(timeoutId)
        }
        return () => {}
    },[carouselItemIndex, carouselImageList.length])

    return ( 
        <div className="mainPage">
            <Navbar />
            <div className="imageCarousel__container">
                {carouselImageList.map(img => <div 
                        className={`carouselItem ${img.id === carouselItemIndex ? 'carouselImageActive' : null}`}
                        style={{backgroundImage: `URL('${img.url}')`
                    }} key={img.id}>
                </div>
                )}
                <div className="carouselDots__container">
                  {carouselImageList.map(item => <div 
                    className='carouselDots' 
                    onClick={() => setCarouselItemIndex(item.id)}
                    style={{backgroundColor: item.id === carouselItemIndex && '#777'}}
                 />)}  
                </div>
                
            </div>
        </div>
     );
}
 
export default ImageCarousel;