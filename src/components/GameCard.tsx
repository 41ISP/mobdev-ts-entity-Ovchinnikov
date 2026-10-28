import { API_URL } from "../api";
import  {GENRRE_LABELS , type IGame } from "../types";

interface IGameCard extends IGame{

}

export function GameCard({id,title,description, cover, rating,price,genre, releaseDate,platforms}: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {cover ? (<img src={API_URL + cover.url} alt={title} />) : (<span>{title[0]}</span>)}
                {title && <span>{title}</span>}
                <b className="card__rating">5</b>
            </div>

            <div className="card__body">
                <h3>Название</h3>
                {genre && (     <p className="card__meta">Жанр: {GENRRE_LABELS[genre]}</p>) }
           
                    <p className="card__meta">год: {new Date(releaseDate).getFullYear()}</p>
                { description && <p className="card__desc">{description[0].children[0].text}</p>}
               { platforms && ( <p className="card__platforms">{platforms.join(" / ")}</p>)}
            </div>

 <footer className="card__footer">
{
    price > 0  ? <strong className="free">{price}</strong> :   <strong className="free">Бесплатно</strong>
}
 
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
