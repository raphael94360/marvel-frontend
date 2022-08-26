import { useEffect, useState } from "react"
import axios from "axios"

const Characters = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raphael-marvel-backend.herokuapp.com/characters")
        console.log(response.data)
        // setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return <div>Personnages</div>
}

export default Characters
