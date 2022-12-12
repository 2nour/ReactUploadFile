import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './drop-file-input.css';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import LimitedWordTextarea from '../../components/textlimit/LimitText';
import { useEffect } from 'react';



const DropFileInput = props => {

    const [description, setdescription] = useState("");

    const wrapperRef = useRef(null);

    const [fileList, setfile] = useState();

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    useEffect(() => {
        console.log(description);
    }, [description])
    const newFileUpload = () => {
        const uploadData = new FormData();
        uploadData.append('id', null);
        uploadData.append('description', description);
        uploadData.append('file', fileList);
        console.log(uploadData);
        fetch('http://127.0.0.1:8000/fileUpload/', {
            method: 'POST',
            body: uploadData
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }


    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = newFile;
            setfile(updatedList);
            props.onFileChange(updatedList);

        }
    }

    const fileRemove = () => {
        const updatedList = null;

        setfile(null);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <label className="drop-file-input__label">
                Description
                <LimitedWordTextarea limit={5} className="drop-file-input__label" value={description} onChange={(evt) => {
                    setdescription(evt.target.value);
                }} />
                <br />
            </label>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drop your files here</p>
                </div>

                <input type="file" value="" accept="application/pdf" onChange={onFileDrop} />
            </div>
            {
                fileList != null ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>

                        {

                            <div key={fileList.index} className="drop-file-preview__item">
                                <img src={ImageConfig[fileList.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                <div className="drop-file-preview__item__info">
                                    <p>{fileList.name}</p>
                                    <p>{fileList.size}B</p>
                                </div>
                                <span className="drop-file-preview__item__del" onClick={() => fileRemove(fileList)}>x</span>

                            </div>

                        }
                        <div>
                            <button onClick={() => newFileUpload()}>Add file</button>

                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
