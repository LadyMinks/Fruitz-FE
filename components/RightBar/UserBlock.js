import UnauthenticatedUserBlock from './UnauthenticatedUserBlock'
import AuthenticatedUserBlock from './AuthenticatedUserBlock'
import {useAuth0} from '@auth0/auth0-react'

export default function UserBlock() {
    const {isLoading, isAuthenticated} = useAuth0()

    if (isLoading) {
        return null
    }

    if (!isAuthenticated) {
        return <UnauthenticatedUserBlock/>
    }

    return (
        <AuthenticatedUserBlock/>
    )
}
