import css from "./NotFoundPage.module.css"
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className={css.notFoundPage}>
            <nav>
                <Link to="/"><button>Home</button></Link>
            </nav>
            <h2>Not Found page</h2>
        </div>
    )
}