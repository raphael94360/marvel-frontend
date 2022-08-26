import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/comics"
          // "https://raphael-marvel-backend.herokuapp.com/comics"
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div>Comics</div>;
};

export default Comics;
