import { API_URL } from "../api";
import type { IGame } from "../types";

interface IGameCard extends IGame{

}

export function GameCard({id,title,description, cover, rating,price}: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {cover && <img src={API_URL + cover.url} alt={title} />}
                {title && <span>{title}</span>}
                <b className="card__rating">5</b>
            </div>

            <div className="card__body">
                <h3>Название</h3>
                {/* <p className="card__meta">Жанр, год</p> */}
                { description && <p className="card__desc">{description[0].children[0].text}</p>}
                <p className="card__platforms">{}</p>
            </div>

            <footer className="card__footer">
                <strong className="free">Бесплатно</strong>
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
