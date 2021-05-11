import React, { useContext } from 'react'
import { DateContext } from "../contexts/DateContext";
import './Header.css'

const Header = () => {
    const [date, setDate] = useContext(DateContext)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    console.log('in Header', date)
    return(
        <div className='header-container'>
            <div className='header-left header-item'>
                <div>Left</div>
                <div>Hair Diary</div>
            </div>
            <div className='header-right header-item'>
                <div>{months[date.getMonth()]}</div>
                <div>{date.getFullYear()}</div>
            </div>
        </div>
    )
}

export default Header