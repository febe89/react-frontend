import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewUser = () => {
  const { id } = useParams()
  const [users, setUsers] = useState({
    name: '',
    username: '',
    email: '',
    img: ''
  })
  useEffect(() => {
    loadUser()
  })

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`, users)
    setUsers(result.data)
  }
  const { name, username, email, img } = users
  return (
    <div className='container'>
      <div className='py-4'>
        <img src={img} width={"180rem"} alt='' />
        <h1>{name}</h1>
        <h3>{username}</h3>
        <h3>{email}</h3>
      </div>
    </div>
  )
}
export default ViewUser
