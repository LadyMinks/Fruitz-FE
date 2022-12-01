import '../styles/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

import { Auth0Provider } from '@auth0/auth0-react'

export default function App ({
    Component,
    pageProps: { session, ...pageProps }
}) {
    return (
        <Auth0Provider
            domain={ process.env.NEXT_PUBLIC_AUTH0_BASE_URL }
            clientId={ process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID }
            redirectUri={ process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL }
            audience={ process.env.NEXT_PUBLIC_AUTH0_AUDIENCE }
            scope={ process.env.NEXT_PUBLIC_AUTH0_SCOPE }
        >
            <Component { ...pageProps } />
        </Auth0Provider>
    )
}
