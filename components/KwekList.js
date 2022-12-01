import Kwek from '../components/Kwek'

export default function KwekList ({ kweks, reloadKweks }) {
    return (
        <section>
            {kweks.map(kwek => <Kwek key={kwek.id} kwek={kwek} reloadKweks={reloadKweks} />)}
        </section>
    )
}
