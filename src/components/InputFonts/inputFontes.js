import React, {useState, useEffect} from "react";
import axios from 'axios';

import "./styles.css";

import Add from '../../assets/images/Add.png';
import Clear from '../../assets/images/Clear.png'

export default function InputFonts({selectFont, setSelectFont}) {
    const [listFonts, setListFonts] = useState([]);
    const [seachFonts, setSeachFonts] = useState([]);
    // const [selectFont, setSelectFont] = useState([]);
    const [isVisible, setIsVisible] = useState(false)

    function handleMenu(e){
        e.preventDefault();
        setIsVisible(!isVisible)
    }

    function selectFonts(font){
        if (!selectFont.includes(font)){
            setSelectFont(selectFont => [...selectFont, font]);
            setIsVisible(false)
        }
    }

    let getFonts = async () => {
        let res = await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBVwi0ToyM0a0ReZ4HdkgrEqOogB_FCjM8');
        //setListFonts(res.data.items);
        let lista = []
        for(var i=0; i<1442; i++){
            lista.push(res.data.items[i].family)
        }
        setListFonts(lista);
    }
    
    function removeFont(index) {
        setSelectFont([
            ...selectFont.slice(0, index),
            ...selectFont.slice(index + 1, selectFont.length)
        ]);
    }

    useEffect(() => {
        getFonts();
    }, []);

    const filterFonts = seachFonts.length > 0
        ? listFonts.filter(font => font.includes(seachFonts))
        : [];
    
    return (
        <div className="input-fonts">
            {selectFont ? (
                <div className="added-fonts">
                    {Object.values(selectFont).map((value, index) => (
                        <div className="added-font" key={index}>
                            <p>{value}</p>
                            <img src={Clear} alt='Icon remover' width='15' height='15' onClick={() => removeFont(index)}/>
                        </div>
                    ))}
                </div>
            ): null}
                <div className="btn-menu">
                    <button onClick={(e) => handleMenu(e)}>
                        <img src={Add} width='30' height='30' alt="Icon Adicionar"/>
                    </button>
                    <div className="drop-menu-fonts" style={{'display': isVisible ? 'block' : 'none'}}>
                        <input placeholder="Buscar fontes" onChange={e => setSeachFonts(e.target.value)}/>

                        <scroll-container className="select-fonts">
                            {seachFonts.length > 0 ? (
                                <div>
                                    {filterFonts.map((value, index) => (
                                        <p key={index} className="fonte" onClick={() => selectFonts(value)}>{value} </p>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    {listFonts.map((value, index) => (
                                        <p key={index} className="fonte" onClick={() => selectFonts(value)}>{value}</p>
                                    ))}
                                </div>
                            )}
                        </scroll-container>
                    </div>
                </div>
        </div>
    )
}