import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import Add from '../../assets/images/Add.png'

import "./styles.css";

import Clear from '../../assets/images/Clear.png';

const Dropzone = ({onFileUploaded, image}) => {
    const  [selctedFileUrl, setSelectFileUrl] = useState(image || '');
    const [imageChallenge, setImageChallenge] = useState(image || '');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSelectFileUrl(fileUrl);
        onFileUploaded(file)
    }, [onFileUploaded]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
          }
    });
    function closeImage() {
        setSelectFileUrl('')
        setImageChallenge('')
    }

    return (
        <div className="body-dropzone">
            <img src={Clear} style={{display: selctedFileUrl ? 'block' : 'none'}} className="image-clear" onClick={() => closeImage()}/>
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()}/>

                { selctedFileUrl
                    ? (
                        <div>
                            {imageChallenge 
                                ? <img src={`http://18.230.194.222:5000/${selctedFileUrl}`} alt="Point thumbnail" className="image-chalenge"/>
                                : <img src={selctedFileUrl} alt="Point thumbnail" className="image-chalenge"/>
                            }
                        </div>
                    ) : (
                        <img src={Add} className='icon-add' alt="Icon adicionar"/>
                    ) 
                }
            </div>
        </div>
    );
}

export default Dropzone;