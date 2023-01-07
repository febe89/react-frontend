import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const [users, setUsers] = useState({
    name: '',
    username: '',
    email: '',
    img: ''
  })
  const { name, username, email, img } = users

  useEffect(() => {
    loadUser()
  }, [])
  const inputHandler = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/user/${id}`, users)
    navigate('/')
  }
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUsers(result.data)
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
export default EditUser
