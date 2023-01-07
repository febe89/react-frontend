import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const AddUser = () => {
  let navigate = useNavigate()
  const [users, setUsers] = useState({
    name: '',
    username: '',
    email: '',
    img: ''
  })
  const { name, username, email, img } = users

  const inputHandler = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:8080/user`, users)
    navigate('/')
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className=''>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter your name' value={name} name='name' onChange={(e) => inputHandler(e)} />
          </div>
          <div className=''>
            <label htmlFor=''>Userame</label>
            <input type='text' placeholder='Enter your username' value={username} name='username' onChange={(e) => inputHandler(e)} />
          </div>
          <div className=''>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Enter your email' value={email} name='email' onChange={(e) => inputHandler(e)} />
          </div>
          <div className=''>
            <label htmlFor=''>Img</label>
            <input type='text' placeholder='Enter your img' value={img} name='img' onChange={(e) => inputHandler(e)} />
          </div>
          <button className='btn btn-primary mx-2'>Submit</button>
          <Link to={'/'} className='btn btn-danger mx-2'>
            Cancel
          </Link>
        </form>
      </div>
    </div>
  )
}
export default AddUser
