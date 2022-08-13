import React, {useState} from "react";
import { BlockPicker } from "react-color";

import './styles.css'

import Add from '../../assets/images/Add.png';
import Clear from '../../assets/images/Clear.png'

export default function InputColors() {

    const [blockPickerColor, setBlockPickerColor] = useState([]);
    const [inputColorVisible, setInputColorVisible] = useState(false);

    function handleColorPickle(e){
        e.preventDefault();
        setInputColorVisible(!inputColorVisible);
        
    }

    function removeColor(index) {
        setBlockPickerColor([
            ...blockPickerColor.slice(0, index),
            ...blockPickerColor.slice(index + 1, blockPickerColor.length)
        ]);
    }

    function handleChangeColor(color) {
        setBlockPickerColor(blockPickerColor => [...blockPickerColor, color]);
        setInputColorVisible(!inputColorVisible);
    }
    return (
        <div className="input-colors">
            {blockPickerColor ? (
                <div className="colors-select">
                    {Object.values(blockPickerColor).map((value, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: `${value}`,
                            }}
                            className='color-select'
                        >
                            <img src={Clear} width='14' height='14' onClick={() => removeColor(index)} alt='icon remover'/>
                        </div>
                    ))}
                </div>
            ) : null}
            
            <div className='btn-color'>
                <button onClick={(e) => handleColorPickle(e)}>
                    <img src={Add} alt='Icon adicionar' />
                </button>
                <div className="pickle-color" style={{'display': inputColorVisible === true ? 'block' : 'none'}}>
                    <BlockPicker
                        
                        onChange={(color) => {
                            handleChangeColor(color.hex);
                        }}
                        
                    />
                </div>
            </div>
        </div>
    );  
}