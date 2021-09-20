import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [hex, setHex] = useState("#f15025");
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    try {
      const color = new Values(hex).all(10);
      setArr(color);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let color;
    if (randomColor.length === 5) {
      color = new Values("#" + randomColor + "0").all(10);
    } else {
      color = new Values("#" + randomColor).all(10);
    }
    setArr(color);
    setError(false);
    setHex("#" + randomColor);
  };
  useEffect(() => {
    const color = new Values(hex).all(10);
    setArr(color);
    setError(false);
  }, []);

  return (
    <>
      <section>
        <form>
          <label htmlFor='generate'>Color Generator: </label>
          <input
            type='text'
            name='generate'
            onChange={(e) => setHex(e.target.value)}
            value={hex}
            className={error ? "error" : ""}
            placeholder='#f15025'
          />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleGenerate} className='generate'>
            Generate
          </button>
        </form>
      </section>
      <div className='color'>
        {arr.map((item, index) => {
          return <SingleColor item={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
