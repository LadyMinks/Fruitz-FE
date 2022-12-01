import Image from 'next/image'
import Link from 'next/link'

export default function LeftBar () {
    return (
        <header
            className="pt-6 w-1/4 h-auto min-h-screen flex flex-col items-center border-r border-kwekker-purple-light"
        >
            <Link href="/">
                <a>
                    <Image
                        src="/images/logo.svg"
                        width={ 100 }
                        height={ 100 }
                        alt="Logo"
                    />
                </a>
            </Link>
        </header>
    )
}
