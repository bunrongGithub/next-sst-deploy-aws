import React from 'react'

export default function Form() {
  return (
    <form>
        <label htmlFor="username">username:</label>
        <input type="text" className='border px-2 py-2 border-gray-500 ' /><br /><br />
        <label htmlFor="password">password:</label>
        <input placeholder='password' type="text" className='border px-2 py-2 border-gray-500 ' />
    </form>
  )
}
