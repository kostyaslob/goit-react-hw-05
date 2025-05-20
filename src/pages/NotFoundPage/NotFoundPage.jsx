import css from "./NotFoundPage.module.css"
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className={css.notFoundPage}>
            <h3>Oops... page not found!</h3>
            <p>Click the Home button, please</p>
            <nav>
                <Link className={css.link} to="/">Home</Link>
            </nav>
        </div>
    )
}