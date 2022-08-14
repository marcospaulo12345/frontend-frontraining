import React, { useEffect, useState } from "react";

import './styles.css';

import Add from '../../assets/images/Add.png';
import Clear from '../../assets/images/Clear.png'

export default function InputTools({selectedTool, setSelectedTool}) {
    const listTools = ['HTML', 'CSS', 'JavaScript', 'React', 'VueJS', 'Sass', 'Bootstrap', 'NodeJS', 'Axios', 'Bulma', 'Uikit', 'Materialize', 'Semantic UI'];

    // const [selectedTool, setSelectedTool] = useState([]);
    const [filterTools, setFilterTools] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [seachTools, setSeachTools] = useState([]);

    function handleSelectedTool(value) {
        setSelectedTool(selectedTool => [...selectedTool, value]);
        setIsVisible(false)
    }

    function clickButton(e) {
        e.preventDefault();
        setIsVisible(!isVisible)
    }

    function removeTool(index) {
        setSelectedTool([
            ...selectedTool.slice(0, index),
            ...selectedTool.slice(index + 1, selectedTool.length)
        ]);
    }

    useEffect(() => {
        setFilterTools(listTools.filter(tool => tool.includes(seachTools)));
    }, [seachTools]);

    // const filterTools = seachTools.length > 0
    //     ? listTools.filter(tool => tool.includes(listTools))
    //     : [];


    return (
        <div className="input-tools">
            {selectedTool ? (
                <div className="selected-tools">
                    {Object.values(selectedTool).map((value, index) => (
                        <div key={index} className='selected-tool'>
                            <p>{value}</p>
                            <img src={Clear} alt='Icon remover' width='15' height='15' onClick={() => removeTool(index)}/>
                        </div>
                    ))}
                </div>
            ): null}
            <div className="btn-tools">
                <button onClick={(e) => clickButton(e)}>
                    <img src={Add} alt='Icone Adicionar' width='34' height='34'/>
                </button>
                <div style={{'display': isVisible ? 'block' : 'none'}} className='dropmenu-tools'>
                    <input type='text' placeholder="Buscar ferramenta" onChange={e => setSeachTools(e.target.value)}/>
                    <scroll-container>
                        {seachTools.length > 0 ? (
                            <>
                                {filterTools.map((value, index) => (
                                    <p key={index} onClick={() => handleSelectedTool(value)}>{value}</p>
                                ))}
                            </>
                        ): (
                            <>
                                {listTools.map((value, index) => (
                                    <p key={index} onClick={() => handleSelectedTool(value)}>{value}</p>
                                ))}
                            </>
                        )}
                    </scroll-container>
                </div>
            </div>
        </div>
    )
} 