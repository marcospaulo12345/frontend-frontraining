import React, {useState} from "react";
import { BlockPicker } from "react-color";

import './styles.css'

import Add from '../../assets/images/Add.png';

export default function InputColors() {

    const [blockPickerColor, setBlockPickerColor] = useState([]);
    const [inputColorVisible, setInputColorVisible] = useState(false);

    function handleColorPickle(e){
        e.preventDefault();
        setInputColorVisible(!inputColorVisible);
        
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
                        ></div>
                    ))}
                </div>
            ) : null}
            
            <div className='btn-color'>
                <button onClick={(e) => handleColorPickle(e)}>
                    <img src={Add} />
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