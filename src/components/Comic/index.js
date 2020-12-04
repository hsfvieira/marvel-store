import './styles.css'

import { addToCart } from '../Cart'
import { formatPrice } from '../../util/format'

import { FaCartPlus } from 'react-icons/fa'

export default function Comic({ data: comic }) {
    return (
        <div key={comic.id} className="comic">
            <div>
                <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} />
                <h1>{comic.title}</h1>
            </div>
            <div>
                <h2>{formatPrice(comic.prices[0].price)}</h2>
                <button onClick={() => { addToCart(comic) }}><FaCartPlus /> Comprar</button>
            </div>
        </div>
    )
}