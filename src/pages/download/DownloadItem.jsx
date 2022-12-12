import React, { useEffect, useState } from 'react';
import '../drop-file-input/drop-file-input.css';
import { useParams } from 'react-router-dom';


const DownloadItem = () => {
    const params = useParams();
    const [fileList, setFileList] = useState([]);
    const fetchFact = () => {
        fetch("http://127.0.0.1:8000/fileUpload/"+params, {
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
                          
                        </ul>


                    </form>
                </div>
            </div>
        </div>



    </>)
}

export default DownloadItem;