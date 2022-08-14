import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import Add from '../../assets/images/Add.png'

import "./styles.css";

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
        accept: 'image/*'
    });

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />

            { selctedFileUrl
                ? <img src={selctedFileUrl} alt="Point thumbnail" className="image-chalenge"/>
                : (
                    <img src={Add} className='icon-add' alt="Icon adicionar"/>
                ) 
            }
        </div>
    );
}

export default Dropzone;