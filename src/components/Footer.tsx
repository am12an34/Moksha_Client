import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import instagramIcon from '@iconify-icons/mdi/instagram'
// import githubIcon from '@iconify-icons/mdi/github'
import MokshaLogo from '~/components/pictures/MokshaLogo'
import { navTabs } from '../data/tabs'

const socialLinks = Object.freeze([
  // {
  //   name: 'Facebook',
  //   href: 'https://www.instagram.com/moksha.nita/?igshid=MzRlODBiNWFlZA%3D%3D',
  //   icon: facebookIcon,
  // },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/moksha.nita/?igshid=MzRlODBiNWFlZA%3D%3D',
    icon: instagramIcon,
  },
  // {
  //   name: 'GitHub',
  //   href: 'https://github.com/arpansaha13/moksha',
  //   icon: githubIcon,
  // },
])

const CURRENT_YEAR = '2025'
// const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className='mt-6 py-12 bg-darkBrown/70 backdrop-blur-sm text-gray-400 text-sm flex flex-col items-center gap-y-6 shadow-inner shadow-amber-900/20'>
      <Link to='/' className='block w-12 h-12'>
        <MokshaLogo />
      </Link>

      <ul className='hidden sm:flex gap-12'>
        {navTabs.map(tab => (
          <li key={tab.to}>
            <Link to={tab.to} className='hover:text-gray-200 transition-colors'>
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className='flex gap-8'>
        {socialLinks.map(socialLink => (
          <li key={socialLink.href}>
            <a
              href={socialLink.href}
              className='block w-6 h-6 hover:text-gray-200 transition-colors'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='sr-only'>{socialLink.name}</p>
              <Icon icon={socialLink.icon} className='block' color='inherit' width='100%' height='100%' aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      <p className='text-xs'>© {CURRENT_YEAR} MOKSHA IX | NIT AGARTALA | ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer
