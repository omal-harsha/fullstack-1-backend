import React from 'react'
import axios from "axios";
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);
  
    let navigate = useNavigate();

    useEffect(() => {
      axios.get("http://localhost:3001/posts").then((response) => {
        setListOfPosts(response.data);
      })
      console.log(listOfPosts.data)
    },[])


  return (
    <div className="App">

      {listOfPosts.map((value, key) => {
        return (
          <div key={key} className='flex items-center flex-col my-5 ' onClick={() => navigate(`/post/${value.id}`)}>
            <div className='flex items-center flex-col my-5 shadow-xl hover:scale-105 ease-in-out hover:shadow-2xl duration-300'>
          <div className='px-5 py-3 bg-blue-500 text-white w-96'> {value.title} </div>
          <div className='my-24'> {value.postText}</div>
          <div className='px-5 py-3 bg-blue-500 text-white w-96 rounded-b-lg'> {value.username}</div>
          </div>
          </div>
        ) 
      })}
    </div>
  )
}

export default Home