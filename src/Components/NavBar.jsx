import React from 'react'

const NavBar = () => {
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
        <ul className="w-[80%]">
          <li className="flex items-center mb-3">
            <span className="h-[15px] w-[15px] mr-2 rounded-full bg-blue-100"></span>
            cat1
          </li>
          <li className="flex items-center mb-3">
            <span className="h-[15px] w-[15px] mr-2 rounded-full bg-red-100"></span>
            cat2
          </li>
          <li className="flex items-center mb-3">
            <span className="h-[15px] w-[15px] mr-2 rounded-full bg-green-100"></span>
            cat3
          </li>
        </ul>
      </nav>
  )
}

export default NavBar