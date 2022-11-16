import { useState,useEffect } from "react";
const Display = () => {
    let [info, setdata] = useState([]);
  
  useEffect(() => {
    let fetchInfo = async () => {
      let response = await fetch("http://localhost:1001/info");
      let resData = await response.json();
      setdata(resData);
    };
    fetchInfo();
  }, []);

  

  let handleDelete = (id) => {
    setdata(info.filter((x) => x.id !== id));
  };

    return ( 
      <div className="disp">
        {info.map((value) => (
          <div className="det">
            <h1>{value.list}</h1>
            <button onClick={handleDelete}>delete</button>
          </div>
        ))}
      </div>
     );
}
 
export default Display;