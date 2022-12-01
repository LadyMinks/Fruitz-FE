export default function ProfileHeader({user}) {
    return (
        <section className="flex flex-col relative">
            <div className="max-h-48 overflow-hidden z-0 absolute top bg-kwekker-purple-dark to-kwekker-purple-lightest">
                <img
                    className="w-screen hue-rotate-90 rounded-full "
                    src={user.avatarUrl}
                    alt="background"
                />
            </div>

            <section className="ml-4 flex flex-row items-center relative top-40 z-10">
                <img
                    className="rounded-full relative z-10"
                    src={user.avatarUrl}
                    width={150}
                    height={150}
                    alt="avatar"
                />
            </section>

            <article
                className="ml-8 font-bold text-lg relative top-40 z-10"
            >
                {user.displayName}
            </article>

            <section className="flex flex-row items-center relative top-40 z-10">
                <article
                    className="ml-8 font-thin text-lg text-opacity-50"
                >
                    @{user.username}
                </article>
            </section>
        </section>
    )

}