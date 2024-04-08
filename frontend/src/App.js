import { useState } from "react";
import axios from 'axios';

function App() {
  let [file, setFile] = useState(null);
  let [imageUrl,setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      let res = await axios.post("http://localhost:3000/upload", formData);
      console.log(res);
      setImageUrl(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h2>Profile Pic</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={upload}>Upload Image</button>
      <img src={imageUrl} />
    </div>
  );
}

export default App;
