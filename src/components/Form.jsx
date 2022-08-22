import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import 'boxicons'

const defaultValue = {
  Email: '',
  Password: '',
  First_name: '',
  Last_name: '',
  Birthday: ''
}

const Form = ({getAllUsers, updateInfo, setUpdateInfo, handleCloseForm}) => {

  useEffect(() => {
    if(updateInfo){
      reset(updateInfo)
    }
  }, [updateInfo])

  const createUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }
    
  const {register, reset, handleSubmit} = useForm()
    
  const submit = data => {
    if(updateInfo){
      // Update User
      updateUser(data)
      setUpdateInfo()
    } else {
      // Create New User
      createUser(data)
    }
    reset(defaultValue)
    handleCloseForm()
  }

  return (
    <div id='sign-up'>
      <div className='container'>
        <span className='heading'>
        {
          updateInfo ? 
            'Update User info'
          : 
            'Create New User'
        }
        </span>
        <form onSubmit={handleSubmit(submit)}>      
            <div className='group'>
              <div className='i'>
                <box-icon name='envelope' color='grey'></box-icon>
              </div>
              <input {...register("email")} type="text" id='Email' placeholder="Enter your email"/>
              <span className="col"></span>
            </div>
            <div className='group'>
              <div className='i'>
                <box-icon name='lock-alt' color='grey'></box-icon>
              </div>
              <input {...register("password")} type="text" id='Password' placeholder="Enter your password"/>
              <span className="col"></span>
            </div>
            <div className='group'>
              <div className='i'>
                <box-icon name='user' color='grey'></box-icon>
              </div>
              <input {...register("first_name")} type="text" id='First_name' placeholder="Enter your first name"/>
              <span className="col"></span>
            </div>
            <div className='group'>
              <div className='i'>
                <box-icon name='user-circle' color='grey'></box-icon>
              </div>
              <input {...register("last_name")} type="text" id='Last_name' placeholder="Enter your last name" />
              <span className="col"></span>
            </div>
            <div className='group'>
              <div className='i'>
                <box-icon name='cake' color='grey'></box-icon>
              </div>
              <input {...register("birthday")} type="date" id='Birthday' placeholder="Enter your birthday" />
              <span className="col"></span>
            </div>
            <div className='group'>
              <button> { updateInfo ? 'Update' : 'Create' }</button>
              <button onClick={handleCloseForm} className='form__equis'>Close</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Form