import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/characters"
          // "https://raphael-marvel-backend.herokuapp.com/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      {data.results.map((result, index) => {
        return <div key={result._id}>{result.name}</div>;
      })}
    </div>
  );
};

export default Characters;
