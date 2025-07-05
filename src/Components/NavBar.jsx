
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../Constants/Content'

const NavBar = () => {
  const [,,category]=useContext(ProductContext)
  
  return (
    <nav className="flex flex-col items-center pt-5">
        <a
          href="/create"
          className="py-3 px-2 rounded-lg border border-blue-200 text-blue-300"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>

        {category.map((value,index)=>(
          <div key={index} className="w-[80%]">
          <Link className="flex items-center mb-3 text-m">
            <span className="h-[15px] w-[15px] mr-2 rounded-full bg-blue-100"></span>
            {value}
          </Link>
          
        </div>
        ))}
      </nav>
  )
}

export default NavBar