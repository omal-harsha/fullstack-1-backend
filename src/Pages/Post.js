import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function Post() {

    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect( () => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
        setPostObject(response.data)
      })

      axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
        setComments(response.data)
      })
    },[])

    const addComment = () => {
        axios
            .post("http://localhost:3001/comments", {
                commentBody: newComment, 
                PostId: id
            },
            {
              headers: {
                accessToken : sessionStorage.getItem("accessToken")
              } 
            }
            )
            .then ((response) => {
              if(response.data.error){
                console.log(response.data.error)

              }else{
            const commentToAdd = {commentBody : newComment, username: response.data.username}
            setComments([...comments,commentToAdd ])
            setNewComment("")
              }
        })
    }

  return (
    <div>
        <div className='flex justify-around space-x-3 px-10'>
            <div className=' py-10 mt-10 w-1/3'> 

            <div className='flex items-center flex-col my-5 bg-white'>
            <div className='flex items-center flex-col my-5 shadow-xl hover:scale-105 ease-in-out hover:shadow-2xl duration-300'>
          <div className=' py-3 bg-blue-500 text-white w-96'> {postObject.title} </div>
          <div className='my-24'> {postObject.postText}</div>
          <div className=' py-3 bg-blue-500 text-white w-96 rounded-b-lg'> {postObject.username}</div>
          </div>
          </div>

            </div>
            <div className=' py-10 bg-gray-50 mt-10 w-2/3 rounded-3xl flex flex-col items-center px-20 space-y-4'> 
                <input className='w-96 px-5 py-3 border-b-sky-500 rounded-lg border-none' type='text' value={newComment} placeholder='Comment..' onChange={(event) => {setNewComment(event.target.value)}}></input>
                <button className='w-96 h-12 rounded-lg bg-blue-500 text-white' onClick={addComment}> Add Comment</button>
                <div className= 'w-full space-y-3'> 
                    {comments.map((comment,key) => {
                        return <div key={key} className='border-2 border-gray-200 px-5 py-3 w-full rounded-lg flex justify-between'> {comment.commentBody} 
                        <label className='bg-blue-200 rounded-lg px-3 py-2'> {comment.username}</label>
                        </div>

                    } )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post