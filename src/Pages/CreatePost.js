import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function CreatePost() {

    let history =  useNavigate();
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title"),
        postText: Yup.string().required(),
        username:Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts",data).then((response) => {
            history("/");
          })
    }

  return (
    <div className="flex justify-center mt-52">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        
            <Form className='flex flex-col border-4 p-5 border-blue-400 rounded-md'>
            <div className='flex flex-col  items-start space-y-2'>
                <label>Title</label>
                <ErrorMessage name="title" component="span" className='text-red-700'/>
                <Field className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    id="inputCreatePost"
                    name="title"
                    placeholder="(Ex. Title)"
                />

                <label>Post</label>
                <ErrorMessage name="postText" component="span" className='text-red-700'/>
                <Field className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    id="inputCreatePost"
                    name="postText"
                    placeholder="(Ex. Post)"
                />

                <label>Username</label>
                <ErrorMessage name="username" component="span" className='text-red-700'/>
                <Field className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    id="inputCreatePost"
                    name="username"  
                    placeholder="(Ex. John123...)"
                />
                 <button type='submit' className='bg-blue-400 w-96 text-white h-10 rounded-lg'> Create Post</button>
                </div>
            </Form>
            
        </Formik>
    </div>
  )
}

export default CreatePost