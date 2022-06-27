import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.svg'
import logoTexto from '../../images/name_logo.svg'
import {
  PeopleOutline,
  HomeOutline,
  ChatbubbleOutline,
  SettingsOutline,
  HelpCircleOutline,
  LockClosedOutline,
  ExitOutline,
} from 'react-ionicons'
const Menu = () => {
  return (
    <div className='navigation'>
      <ul>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <Image src={logo} alt='logo' />
            </span>
            <span className='title'>
              <Image src={logoTexto} alt='nome da logo' />
            </span>
          </a>
        </li>
        <li className='list active'>
          <a href='#'>
            <span className='icon'>
              <HomeOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Home</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <PeopleOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Usuario</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <ChatbubbleOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Messagens</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <SettingsOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Configurações</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <HelpCircleOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Ajuda</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <LockClosedOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Senha</span>
          </a>
        </li>
        <li className='list'>
          <a href='#'>
            <span className='icon'>
              <ExitOutline color={'#00000'} height='25px' width='25px' />
            </span>
            <span className='title'>Sair</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
