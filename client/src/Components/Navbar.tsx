import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from "react-router-dom";

const navigation = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Calendar', href: 'calendar', current: false },
    { name: 'About', href: 'about', current: false },
    { name: 'Profile', href: 'profile', current: false }
]

/* For side-nav
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]
<div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
*/

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

// bg-gray-900 text-white
export default function Example() {
    return (
        <Disclosure as="nav" className="bg-nav text-highlight">
            {({ open }) => (
                <>
                    {/* Top Nav */}
                    <div className="px-2 sm:px-6">
                        <div className="relative flex h-14 items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:justify-start">
                                <h1>YourGuitarLessons</h1>
                            </div>
                            <div className="hidden absolute inset-y-0 right-0 sm:flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                <div className="ml-6 flex space-x-4">
                                    <Link to={`/profile`}>Profile</Link>
                                    {/*TODO: Add logging out*/}
                                    <p className="hover:cursor-pointer" onClick={() => console.log("you have been logged out")}>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={NavLink}
                                    to={item.href}
                                    className={
                                        classNames(
                                            item.current ? 'bg-nav-highlight' : 'hover:bg-nav-hover',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    onClick={() => {
                                        navigation.map((item) => item.current = false)
                                        item.current = true
                                    }}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            <Disclosure.Button
                                as="button"
                                className='w-full hover:bg-nav-hover block rounded-md px-3 py-2 text-base text-left font-medium'
                                onClick={() => console.log("you have been logged out")}
                            >Logout</Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}