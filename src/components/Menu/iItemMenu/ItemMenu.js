import React from 'react'

const ItemMenu = ({ children }) => {
  return (
    <li className='list'>
      <a href='#'>
        <span className='icon'>{children}</span>
        <span className='title'>Configurações</span>
      </a>
    </li>
  )
}

export default ItemMenu
