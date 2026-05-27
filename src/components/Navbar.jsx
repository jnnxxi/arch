import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/company/logo-white.png'
import { useLocation, Link } from 'react-router-dom';


const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <Disclosure
      as="nav"
      className="relative bg-black border-b border-yellow-500/20"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300 focus:outline-2 focus:-outline-offset-1 focus:outline-yellow-400">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-start">
            <div className="flex shrink-0 items-center gap-2">
              <img
                alt="A Studio"
                src={logo}
                className="h-8 w-auto scale-150 transform"
              />
              <div className="ml-3 text-lg font-semibold text-white">
                <span className="text-yellow-400">A+ Studio</span> Design and Build
              </div>
            </div>

          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={classNames(
                      isActive(item.href)
                        ? 'bg-yellow-400 text-black'
                        : 'text-white hover:bg-yellow-400/10 hover:text-yellow-300',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={classNames(
                isActive(item.href)
                  ? 'bg-yellow-400 text-black'
                  : 'text-white hover:bg-yellow-400/10 hover:text-yellow-300',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
