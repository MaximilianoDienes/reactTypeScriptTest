import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}

const List = ({subs}: Props) => {
    return (
        <ul>
            {
                subs.map(sub => (
                    <li>
                    <img src={sub.avatar} alt={`Avatar de ${sub.nick}`}></img>
                    <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                    <p>{sub.description?.substring(0, 100)}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default List