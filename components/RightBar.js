import UserBlock from './RightBar/UserBlock'

export default function RightBar () {
    return (
        <aside className="flex-initial w-1/4 border-l border-kwekker-purple-light">
            <div className="mx-3 my-2">
                <UserBlock />
            </div>
        </aside>
    )
}
