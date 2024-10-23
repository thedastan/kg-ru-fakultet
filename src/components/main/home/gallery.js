import { useEffect, useState } from "react";
import { api } from "../../../http/api";


// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

const Gallery = () => {

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/gallery/");  
        setDatas(data);
        console.log(data, "dataGalarea");
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="galarea">
      <div className="container">
        <h3>Факультеттин галереясы</h3>
        <div  className="galarea">
          {datas.map((el, index) => (
            <div key={index} className="box" >
                {/* <Zoom>  */}
                <img
                src={el.image}
                alt="img"
              />
              {/* </Zoom> */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
 