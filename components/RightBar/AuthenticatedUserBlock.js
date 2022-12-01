import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useAuth0} from '@auth0/auth0-react'
import {Menu, Transition} from "@headlessui/react";
import classNames from "classnames";
import {Fragment} from "react";
import Link from 'next/link'

export default function AuthenticatedUserBlock() {
    const {logout, user} = useAuth0()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button as={Fragment}>
                <div
                    className="flex w-fit px-3 py-2 items-center text-left cursor-pointer rounded-full hover:bg-kwekker-purple-mediumdark transition"
                >
                    <img
                        className="rounded-full mr-3"
                        src={user.picture}
                        width="50"
                        height="50"
                        alt={user.name}
                    />

                    <div className="mr-5">
                        <p className="font-bold">
                            {user.name}
                        </p>
                        <p>
                            @{user['https://www.kwekker.xyz/username']}
                        </p>
                    </div>

                    <button
                        className="font-bold rounded h-fit text-kwekker-purple-lightest"
                    >
                        <FontAwesomeIcon icon={faEllipsis}/>
                    </button>
                </div>
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-kwekker-purple-dark border border-kwekker-purple-light ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({active}) => (
                                <Link href={`/profile/${user['https://www.kwekker.xyz/username']}`}>
                                    <a
                                        className={classNames(
                                            active ? 'bg-kwekker-purple-mediumdark' : '',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Profile
                                    </a>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-kwekker-purple-mediumdark' : '',
                                        'block w-full text-left px-4 py-2 text-sm'
                                    )}
                                    onClick={() => logout({returnTo: window.location.origin})}>
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    )
}
