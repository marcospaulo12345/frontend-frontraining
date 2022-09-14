import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import Add from '../../assets/images/Add.png'

import "./styles.css";

import Clear from '../../assets/images/Clear.png';

const Dropzone = ({onFileUploaded}) => {
    const  [selctedFileUrl, setSelectFileUrl] = useState('');

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

    return (
        <div className="body-dropzone">
            <img src={Clear} style={{display: selctedFileUrl ? 'block' : 'none'}} className="image-clear" onClick={() => setSelectFileUrl('')}/>
            <div className="dropzone" {...getRootProps()}>
                <input {...getInputProps()}/>

                { selctedFileUrl
                    ? (
                        <div>
                            <img src={selctedFileUrl} alt="Point thumbnail" className="image-chalenge"/>
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