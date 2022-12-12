import './App.css';
import DropFileInput from './pages/drop-file-input/DropFileInput';
import { Routes, Route } from "react-router-dom";
import Download from './pages/download/Download';
import DownloadItem from './pages/download/DownloadItem';

function App() {


  const onFileChange = (files) => {
    console.log(files);

  }

  return (

    <div className="box">
     
      <Routes>
        <Route path='/upload' element={<DropFileInput onFileChange={(files) => onFileChange(files)} />}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/downloadItem/:id' element={<DownloadItem />} />

      </Routes>


    </div>
  );
}

export default App;
