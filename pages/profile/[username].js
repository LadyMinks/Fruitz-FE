import Layout from "../../components/Layout";
import Head from "next/head";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import KwekList from "../../components/KwekList";
import {get} from "../../lib/api/connector"
import {useState, useEffect} from "react";
import {useRouter} from "next/router";

export default function Profile(props) {
    const [loading, setLoading] = useState(true)
    const [kweks, setKweks] = useState([])
    const [user, setUser] = useState([])

    const router = useRouter()
    const {username} = router.query

    async function getKweks() {
        const kweks = await get('kweks?username=' + username)
        setKweks(kweks)
        setLoading(false)
    }

    async function getUser(){
        const user = await get('users/'+ username)
        setUser(user)
        setLoading(false)
    }

    useEffect(() => {
        if (!username) {
            return
        }
        getKweks()
        getUser()
    }, [username])

    return (
        <Layout>
            <Head>
                <title>Kwekker</title>
            </Head>

            <header className="p-4 mb-2 border-b border-kwekker-purple-light">
                <h1 className="text-2xl font-bold">Profile</h1>
            </header>

            <div className="flex flex-col">

                <div className="pb-20 mb-2">
                    <ProfileHeader user={user}/>
                </div>

                <section className="mt-20 border-t border-kwekker-purple-light">
                    {loading ? (
                        <p className="mt-4 text-center text-xl font-bold">
                            Loading...
                        </p>
                    ) : kweks && kweks.length > 0 ? <KwekList kweks={kweks} reloadKweks={getKweks}/> : (
                        <p className="mt-4 text-center text-xl font-bold">
                            No kweks here...
                        </p>
                    )}
                </section>
            </div>
        </Layout>
    )
}