import React from 'react'
import './Tile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faStar } from '@fortawesome/free-solid-svg-icons'


const Tile = ({data}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const date = data.date.getDate()
    const day = data.date.getDay()
    const info = data.data[0]
    const imageUrl = (info!==undefined) ? info.media[0].mediaurl : null
    const rating = (info!==undefined) ? info.rating : null
    const ratingDisplay = []
    if (rating!==null) {
        let temp=rating
        for(var i=0;i<5;i++){
            if(temp>0){
                ratingDisplay.push(<FontAwesomeIcon icon={faStar} size='xs' className='star' style={{color: 'lightblue'}}/>)
                temp--
            }
            else ratingDisplay.push(<FontAwesomeIcon icon={faStar} size='xs' className='star' style={{color: 'lightgray'}}/>)
        }
    }
    const legend = {
        'hair cut': 'Cu',
        'protein treatment': 'Pr',
        'hair color': 'HC',
        'deep conditioning': 'DC',
        'clarifying': 'C'
    }
    const legendDisplay = (info!==undefined) ? info.typeofday : null
    console.log(info)
    console.log(imageUrl)
    console.log(rating)
    
    return(
        <div className={(day===0)?'grid-item sunday' :'grid-item'}>
            <div className='date'>{(date===1)?`${months[data.date.getMonth()]} ${date}` : date}</div>
            {/* <FontAwesomeIcon icon={faStar} size='xs' className='star'/>
            <FontAwesomeIcon icon={['fas', 'star']} size='xs'/> */}
            <div className='rating'>{(rating!==null)? <div>{ratingDisplay}</div> : <h4/>}</div>
            <div className='image'>{(imageUrl!==null)?<img className='image-item' src={imageUrl}></img> :<div className='image-height'/>}</div>
            <div className='legend'>{(legendDisplay!==null)? legendDisplay.map((item)=><div className='legend-item'>{legend[item]}</div>) : <div/>}</div>
        </div>
    )
}

export default Tile