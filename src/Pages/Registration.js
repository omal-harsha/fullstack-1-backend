import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import axios from 'axios'

export const Registration = () => {

  const initialValues = {
    username: "",
    password: "",
    
}

const validationSchema = Yup.object().shape({
    username:Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required()
})

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth",data).then(() => {
      console.log(data)
    })
  }

  return (
    
    <div className="flex justify-center mt-52">
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        
            <Form className='flex flex-col border-4 p-5 border-blue-400 rounded-md'>
            <div className='flex flex-col  items-start space-y-2'>
                

                <label>Username</label>
                <ErrorMessage name="username" component="span" className='text-red-700'/>
                <Field className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    id="inputCreatePost"
                    name="username"  
                    placeholder="(Ex. John123...)"
                />

                <label>Password</label>
                <ErrorMessage name="password" component="span" className='text-red-700'/>
                <Field className="w-96 h-10 px-3 border-2 border-gray-400 rounded-lg"
                    id="inputCreatePost"
                    name="password"  
                    placeholder="(Your password)"
                    type="password"
                />
                 <button type='submit' className='bg-blue-400 w-96 text-white h-10 rounded-lg'> Register</button>
                </div>
            </Form>
            
        </Formik>
        </div>
  )
}
