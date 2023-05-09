/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
// import axios from './Api';
import api from './Api';

//using promises

const Axios = () => {

    const [myData, setMyData] = useState([]);
    const [Iserror, setIsError] = useState("");

    // eslint-disable-next-line no-unused-vars
 

    //Data Fetching using axios with async and await using try and catch

    
   

    const getApiData = async () => {
        try {
            const res = await api.get("/posts")
            setMyData(res.data);
            
        }catch (err) {
            setIsError(err.message);
        }
        
           
        
    }
    useEffect(() => {

        //Data Fetching Using axios with promises

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((res) =>
        //         setMyData(res.data)
        // ).catch((err) => {
        //     setIsError(err.message)
        // })
        

        getApiData();

    }, [])
  return (
      <>
          {Iserror !== "" && <p>{Iserror}</p>}
          <div className='grid'>
          {myData.slice(0,9).map((post) => {
              const {id, title, body } = post;
              return (<div className="fetch" key={id}>
                  <h2>title:{title.slice(0, 15).toUpperCase()}</h2>
                  <p>body:{body.slice(0, 100)}</p>
              </div>
              );
          })}
              </div>
     
      </>
  )
}


export default Axios