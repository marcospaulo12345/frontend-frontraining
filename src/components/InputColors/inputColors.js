import React, {useState} from "react";
import { BlockPicker } from "react-color";


export default function InputColors() {

    const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");
    const [inputColorVisible, setInputColorVisible] = useState(false);
    return (
        <div>
            <div
            style={{
                backgroundColor: `${blockPickerColor}`,
                width: 100,
                height: 50,
                border: "2px solid white",
            }}
            onClick={() => setInputColorVisible(!inputColorVisible)}
            ></div>
            <div style={{'display': inputColorVisible === true ? 'block' : 'none'}}>
                <BlockPicker
                    color={blockPickerColor}
                    onChange={(color) => {
                        setBlockPickerColor(color.hex);
                    }}
                    
                />
            </div>
        </div>
    );  
}