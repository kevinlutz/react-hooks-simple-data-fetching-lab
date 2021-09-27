import { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);

  if (!dogPic) return <p>Loading...</p>;
  return <img src={dogPic} alt="A Random Dog"></img>;
}

export default App;
