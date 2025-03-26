import { Link } from 'react-router-dom'
import '../styles/PageNotFound.scss'

export default function PageNotFound() {
    return (
        <div className="not-found">
            <p>Something go wrong</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}
