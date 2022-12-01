import { useAuth0 } from '@auth0/auth0-react'

export default function UnauthenticatedUserBlock () {
    const { loginWithRedirect } = useAuth0()

    return (
        <button
            className="flex w-fit px-3 py-2 items-center cursor-pointer rounded-full hover:bg-kwekker-purple-mediumdark transition"
            onClick={loginWithRedirect}
        >
            <div className="font-bold">
                Sign in / Register
            </div>
        </button>
    )
}
