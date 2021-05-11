import React, {useContext, useEffect, useState} from 'react'
import { DateContext } from "../contexts/DateContext";
import './Grid.css'
import Tile from "./Tile";

const Grid = (startDate) => {
    const [date, setDate] = useContext(DateContext)
    const [displayArray, setDisplayArray]=useState([])

    // const [posts, setPosts] = useState([])
    let posts = []
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    useEffect(()=>{
        fetchData(null)
    }, [])

    const fetchData = (token) => {
        console.log('fetching Data for token:', token)
        fetch("http://devapi.quinn.care/graph", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "requestobjects": [
                  {
                    "posts": {
                      "operationtype": "read",        
                      "id": {
                        "return": true
                      },
                      "userid": {
                          "searchvalues" : ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
                        "return": true
                      },
                      "iscalendarentry": {
                          "searchvalues" : ["true"],
                        "return": true
                      },        
                      "media": {
                        "return": true //contains image url
                      },
                      "rating": {
                        "return": true
                      },
                      "text": {
                        "return": true
                      },
                      "privacy": {
                        "searchvalues": [
                          18
                        ],
                        "return": true
                      },
                      "typeofday": {
                        "return": true
                      },
              
                      // Don't change anything above ^^	
                      //editable variables start below //
              
                      "calendardatetime": { // Date Time of a particular post
                        "return": true  , // please note: there can be multiple posts on a single day
                        "sort" : "ascending" // you can sort fetched dates by ascending/descending.
                      },
                      "maxitemcount": "20",   //you can ask between 1 to 50 posts (max) at a time.
                      "continuationtoken": token //replace with the continuation token from response to get the next set
                    }
                  }
                ]
              }),
            // redirect: 'follow'
          })
        .then(response => response.json())
        .then(result => {
            const temp = result.responseobjects[0].posts;
            console.log('temp', temp)
            const continuationToken = result.responseobjects[0].continuationtoken;
            console.log('cont token: ', continuationToken)
            // setPosts(prevState => {
            //     return [...prevState, ...temp]
            // })
            posts = [...posts, ...temp]
            if (continuationToken !== null) {
                fetchData(continuationToken)
            }
            else {
                preprocess()
            }
        })
        .catch(error => console.log('error', error)); 
    }

    const preprocess = () => {
        console.log('in pre-process')
        console.log('posts: ', posts)
        const length = posts.length;
        console.log('length: ', length)
        const datesArray = posts.map((post, index)=>{
            console.log('preprocessed date: ', post.calendardatetime)
            const time = post.calendardatetime
            const array = time.split('-')
            array[2] = array[2].slice(0,2)
            // console.log(array)
            const date = new Date(array[0], array[1]-1, array[2])
            console.log('processed date: ',date)
            return date
        })
        console.log(datesArray)
        makeTiles(datesArray)
    }

    const makeTiles = (datesArray) => {
      console.log('datesArray in makeTiles', datesArray)
      console.log(datesArray[0], datesArray[0].getFullYear(), datesArray[0].getMonth(), datesArray[0].getDate())
        const lastDay = new Date(datesArray[0].getFullYear(), datesArray[0].getMonth(), datesArray[0].getDate()-datesArray[0].getDay()+6);
        // const lastDay = new Date(datesArray[0].getFullYear(), datesArray[0].getMonth(), datesArray[0].getDate()-datesArray[0].getDay()+7);
        const firstDay = new Date(datesArray[datesArray.length-1].getFullYear(), datesArray[datesArray.length-1].getMonth(), datesArray[datesArray.length-1].getDate()-datesArray[datesArray.length-1].getDay());
        console.log('first day: ', firstDay)
        console.log('last day: ',lastDay)
        for(var i=firstDay; i<=lastDay; i.setDate(i.getDate()+1)){
            console.log(i)
            // console.log(datesArray.map((item, index)=>{
            //     // console.log('item date', item.getDate())
            //     // console.log('i date: ', i.getDate())
            //     // console.log('compare: ', item.getDate()===i.getDate())
            //     return((item.getDate()===i.getDate())&&(item.getMonth()===i.getMonth())&&(item.getFullYear()===i.getFullYear())? index : false)
            // }).filter(item=>item!==false))
            const temp = datesArray
                            .map((item, index)=>{
                            return((item.getDate()===i.getDate())&&(item.getMonth()===i.getMonth())&&(item.getFullYear()===i.getFullYear())? index : false)
                            })
                            .filter(item=>item!==false)
            const val= {
                        date: new Date(i.getFullYear(), i.getMonth(), i.getDate()),
                        data: temp.map((item)=>posts[item])
                        }
            console.log(val)
            setDisplayArray(prevState => {
                return( [...prevState, val])
            })
        }
        console.log(displayArray)
        // var boo = datesArray.filter((item)=>item===datesArray[1])
        // console.log('bool: ', boo)
        // console.log('datesArray[1]: ', datesArray[1])
        // console.log('datesArray[2]: ', datesArray[2])
        // console.log('==', datesArray[1]==datesArray[2])
    }
    
    return(
        <div className='grid-container'>
            {/* <div className='grid-item sticky'>S</div>
            <div className='grid-item sticky'>M</div>
            <div className='grid-item sticky'>T</div>
            <div className='grid-item sticky'>W</div>
            <div className='grid-item sticky'>T</div>
            <div className='grid-item sticky'>F</div>
            <div className='grid-item sticky'>S</div> */}
            {displayArray.map((item, index)=><Tile key={index} data={item} ></Tile>)}
            {/* {displayArray.map((item, index)=><div key={index} className='grid-item'>In tile</div>)} */}
        </div>
    )
}

export default Grid