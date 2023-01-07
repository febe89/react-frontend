import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-4 py-4'>
      <Link className='btn btn-primary' to={'/'}>
        Brand
      </Link>
    </div>
  )
}
export default Navbar
