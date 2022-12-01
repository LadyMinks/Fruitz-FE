import Image from 'next/image'
import {DateTime} from 'luxon'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./DeleteModal";
import {del, put} from '../lib/api/connector'
import Link from 'next/link'
import {useAuth0} from "@auth0/auth0-react";
import KwekSubmission from "./Home/KwekSubmission";

export default function Kwek({kwek, reloadKweks}) {
    const {DateTime} = require('luxon')
    const {getAccessTokenSilently, user} = useAuth0()
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false)

    async function handleDelete() {
        const token = await getAccessTokenSilently()
        await del(`kweks/${kwek.id}`, token)
        setShowDeleteModal(false);
        reloadKweks()
    }

    async function submitEdit(kwekBody) {
        const token = await getAccessTokenSilently()
        await put(`kweks/${kwek.id}`, token, kwekBody)
        setIsEditing(false)
        reloadKweks()
    }

    return (
        <section className="p-4 flex flex-row border-kwekker-purple-light border-b">
            <Link
                href={`/profile/${kwek.user.username}`}
            >
                <a>
                    <Image
                        src={kwek.user.avatarUrl}
                        width={75}
                        height={75}
                        alt="Avatar"
                        className="rounded-full resize-none"
                    />
                </a>
            </Link>

            <article className="flex flex-col w-full ml-4">
                <section className="flex w-full">
                    <div className="mr-2 flex-1">
                        <span className="font-bold inline-block mr-2">{kwek.user.displayName}</span>
                        <span className="inline-block mr-3">@{kwek.user.username}</span>
                        <span className="inline-block">
                            {DateTime.fromISO(kwek.postedAt).toFormat('d/LLL/yyyy H:mm:ss')}
                        </span>

                    </div>

                    {user && user['https://www.kwekker.xyz/username'] === kwek.user.username &&
                        <div>
                            <button onClick={() => setIsEditing(!isEditing)}>
                                <FontAwesomeIcon
                                    className="mr-3"
                                    icon={faPenToSquare}
                                    size="xl"
                                />
                            </button>

                            <button onClick={() => setShowDeleteModal(true)}>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    size="xl"
                                />
                            </button>
                        </div>
                    }
                </section>

                <section>
                    {isEditing &&
                        <KwekSubmission initialValue={kwek.text} postKwek={submitEdit} />
                    }

                    {!isEditing && kwek.text}
                </section>

            </article>

            {showDeleteModal && (
                <DeleteModal
                    handleFirstButton={() => setShowDeleteModal(false)}
                    handleSecondButton={handleDelete}
                />
            )}
        </section>
    )
}
