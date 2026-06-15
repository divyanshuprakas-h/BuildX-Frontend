import './pref.css'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Pref = () => {

    const [active, setActive] = useState('shots')
    const [search, setSearch] = useState('')

    return(
        <div className='pref'>
            <div>
            <div className='pref-toggle'>
                <button className={ active === 'shots' ? 'active':''} onClick={() => setActive('shots')}>Shots</button>
            </div>
            <div className='pref-toggle'>
                <button className={ active === 'designers' ? 'active':''} onClick={() => setActive('designers')}>Designers</button>
            </div>
            <div className='pref-toggle'>
                <button className={ active === 'services' ? 'active':''} onClick={() => setActive('services')}>Services</button>
            </div>
            </div>
            <br/>

            <div className='search-box'>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="What type of design.."/>
                <button className="clear-btn" onClick={() => setSearch('')}> <IoCloseOutline /></button>
                <button className="search-btn"> <FiSearch /></button>
            </div>
            
        </div>
    )
}

export default Pref;