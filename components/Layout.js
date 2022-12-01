import LeftBar from './LeftBar'
import RightBar from './RightBar'

export default function Layout({ children }) {
    return (
        <div className="container mx-auto flex h-auto min-h-screen">
            <LeftBar />

            <main className="w-2/4 flex-1">
                {children}
            </main>

            <RightBar />
        </div>
    )
}
