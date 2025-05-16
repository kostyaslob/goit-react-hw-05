import css from "./ImageGallery.module.css"
import ImageCard from "./ImageCard/ImageCard"

export default function ImageGallery({ items, openModal }) {
    return (
        <ul className={css.gallery}>
            {items.map((item) => {
                return (
                    <li key={item.id} onClick={() => openModal(item)}>
                        <ImageCard data={item} />
                    </li>
                );
            })}
        </ul>        
    )
}