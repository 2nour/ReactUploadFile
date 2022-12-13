import React, { useEffect, useState } from 'react';
import '../drop-file-input/drop-file-input.css';



const Download = () => {
    const [fileList, setFileList] = useState([]);
    const fetchFact = () => {
        fetch("http://127.0.0.1:8000/fileUpload/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        })
            .then((response) => response.json())
            .then((data) => setFileList(data));

    }
    useEffect(() => {
        fetchFact()
    }, []);






    return (<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="display-4 text-center"> Download files</h1>
                    <form className="d-flex flex-column">




                        <ul>
                            {
                                fileList.map((item, index) => (

                                    <div key={index} className="drop-file-preview__item">

                                        <div className="drop-file-preview__item__info">
                                            {item.description}


                                            <a href={item.file} download={item.filename}><button>Click to download</button></a>




                                        </div>
                                        <iframe
                                            style={{ width: "40%", height: "200px" }}
                                            src={item.file}
                                        >
                                            {" "}
                                        </iframe>
                                    </div>


                                ))
                            }
                        </ul>


                    </form>
                </div>
            </div>
        </div>



    </>)
}
export default Download;