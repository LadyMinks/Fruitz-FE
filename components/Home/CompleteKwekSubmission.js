import Image from "next/image";
import {useAuth0} from '@auth0/auth0-react'
import KwekSubmission from "./KwekSubmission";

export default function CompleteKwekSubmission({postKwek, initialValue}) {
    const {user} = useAuth0()

    return (
        <section className="flex flex-row">
            <div
                className="rounded-full flex-initial self-center ml-4 "
            >
                <Image
                    src={user.picture}
                    width={75}
                    height={75}
                    alt="Avatar"
                    className="rounded-full"
                />

            </div>

            <div
                className="w-full"
            >
                <KwekSubmission
                    postKwek={postKwek}
                />

            </div>
        </section>
    )
}