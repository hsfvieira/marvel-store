import { useEffect, useState } from 'react'
import './styles.css'
import Comic from '../../components/Comic'
import getData from '../../lib/api'

import { FaCartArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Index() {

    const [ listComics, setListComics ] = useState([])
    const [ offset, setOffset ] = useState(0)
    const [ limit, setLimit ] = useState(20)
    const [ alertDisplay, setAlertDisplay ] = useState('none')

    async function getDataComicsAndSet(setListComics, limit, offset) {
        const data = await getData('/v1/public/comics', {limit, offset})    
        setListComics(data.data.results)
    }
    
    useEffect(() => {
        getDataComicsAndSet(setListComics, limit, offset)
    }, [offset])  

    return (
        <>
            <div className="container">
                {listComics?.map(comic => (
                    <Comic data={comic} />
                ))}
            </div>
            <div className="alert">
                <FaCartArrowDown /><span>Item adicionado ao carrinho com sucesso</span>
            </div>
            <div className="container-pagination" style={{ display: alertDisplay }}>
                <button 
                    onClick={() => {
                        (offset - limit) <= 0 ? setOffset(0) : setOffset(offset - limit)
                        getDataComicsAndSet(setListComics, limit, offset) 
                    }}
                    className="button-pagination"
                ><FaArrowLeft size={25} /></button>
                <button 
                    onClick={() => {
                        setOffset(offset + limit)
                        getDataComicsAndSet(setListComics, limit, offset)
                    }}
                    className="button-pagination"
                ><FaArrowRight size={25} /></button>
            </div>
        </>
    )
}