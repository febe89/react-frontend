import { useEffect, useState } from 'react'
import axios from 'axios'
import AddUser from '../users/AddUser'
import { Link, useParams } from 'react-router-dom'
const Home = () => {
  const [users, setUsers] = useState([])
  // const {id}=useParams()
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users`)
    setUsers(result.data)
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUser()
  }
  return (
    <div className='py-4 px-4'>
      <Link to={'/adduser'} className='btn btn-outline-primary'>
        Add User
      </Link>
      <table className='table shadow '>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Img</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.img}</td>
                <td>
                  <Link className='btn btn-outline-primary' to={`/edituser/${user.id}`}>
                    Edit
                  </Link>
                  <Link className='btn btn-primary' to={`/viewuser/${user.id}`}>
                    View
                  </Link>
                  <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Home
