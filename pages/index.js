import Head from 'next/head'
import Layout from '../components/Layout'
import KwekSubmission from '../components/Home/KwekSubmission'
import KwekList from '../components/KwekList'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { get, post } from '../lib/api/connector'
import CompleteKwekSubmission from "../components/Home/CompleteKwekSubmission";

export default function Home () {
    const [loading, setLoading] = useState(true)
    const [kweks, setKweks] = useState([])
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    async function getKweks () {
        const kweks = await get('kweks')
        setKweks(kweks)
        setLoading(false)
    }

    useEffect(() => {
        getKweks()
    }, [])

    async function postKwek (kwek) {
        const token = await getAccessTokenSilently()

        await post('kweks', token, { text: kwek.text })
        await getKweks()
    }

    return (
        <Layout>
            <Head>
                <title>Kwekker</title>
            </Head>

            <header className="p-4 mb-2 border-b border-kwekker-purple-light">
                <h1 className="text-2xl font-bold">Home</h1>
            </header>

            { isAuthenticated && (
                <div className="border-b border-kwekker-purple-light w-full">
                    <CompleteKwekSubmission postKwek={ postKwek }/>
                </div>
            ) }

            <section>
                { loading ? (
                    <p className="mt-4 text-center text-xl font-bold">
                        Loading...
                    </p>
                ) : kweks && kweks.length > 0 ? <KwekList kweks={ kweks } reloadKweks={getKweks} /> : (
                    <p className="mt-4 text-center text-xl font-bold">
                        No kweks here...
                    </p>
                ) }

            </section>

        </Layout>
    )
}
