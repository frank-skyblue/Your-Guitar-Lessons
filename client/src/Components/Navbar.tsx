import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from "react-router-dom";
import { classNames } from '../util/helpers';

// TODO: Fix the hard-coded current value
const navigation = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Calendar', href: 'calendar', current: false },
    { name: 'About', href: 'about', current: false },
    { name: 'Profile', href: '#', current: false }
]

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-nav text-content-highlight">
            {({ open }) => (
                <>
                    {/* Top Nav */}
                    <div className="px-2 md:px-6">
                        <div className="relative flex h-14 items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                            <div className="flex flex-1 items-center justify-center md:justify-start">
                                <Link to="home"><h1>YourGuitarLessons</h1></Link>
                            </div>
                            <div className="hidden absolute inset-y-0 right-0 md:flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                <div className="ml-6 flex space-x-4">
                                    <Link to={`#`}>Profile</Link>
                                    {/*TODO: Add logging out*/}
                                    <p className="hover:cursor-pointer" onClick={() => console.log("you have been logged out")}>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={NavLink}
                                    to={item.href}
                                    className={
                                        classNames(
                                            item.current ? 'bg-mobile-nav-highlight' : 'hover:bg-mobile-nav-hover',
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
                                className='w-full hover:bg-mobile-nav-hover block rounded-md px-3 py-2 text-base text-left font-medium'
                                onClick={() => console.log("you have been logged out")}
                            >Logout</Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}