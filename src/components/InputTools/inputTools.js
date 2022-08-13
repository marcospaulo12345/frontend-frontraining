import React, { useState } from "react";

import './styles.css';

import Add from '../../assets/images/Add.png';
import Clear from '../../assets/images/Clear.png'

export default function InputTools() {
    const listTools = ['HTML', 'CSS', 'JavaScript', 'React', 'VueJS', 'Sass', 'Bootstrap', 'NodeJS', 'Axios', 'Bulma', 'Uikit', 'Materialize', 'Semantic UI'];

    const [selectedTool, setSelectedTool] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    function handleSelectedTool(value) {
        setSelectedTool(selectedTool => [...selectedTool, value]);
        setIsVisible(false)
    }

    function clickButton(e) {
        e.preventDefault();
        setIsVisible(!isVisible)
    }

    return (
        <div className="input-tools">
            {selectedTool ? (
                <div className="selected-tools">
                    {Object.values(selectedTool).map((value, index) => (
                        <div key={index} className='selected-tool'>
                            <p>{value}</p>
                            <img src={Clear} width='15' height='15'/>
                        </div>
                    ))}
                </div>
            ): null}
            <div className="btn-tools">
                <button onClick={(e) => clickButton(e)}>
                    <img src={Add} width='24' height='24'/>
                </button>
                <div style={{'display': isVisible ? 'block' : 'none'}} className='dropmenu-tools'>
                    <scroll-container>
                        <input type='text' placeholder="Buscar ferramenta"/>
                        {listTools.map((value, index) => (
                            <p key={index} onClick={() => handleSelectedTool(value)}>{value}</p>
                        ))}
                    </scroll-container>
                </div>
            </div>
        </div>
    )
} 