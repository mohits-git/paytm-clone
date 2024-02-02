import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function App() {
   const navigate = useNavigate(); 

    useEffect(() => {
        navigate('/dashboard')
    }, [navigate])

  return (
    <div>
      Paytm Lite (sasta version)
    </div>
  )
}

export default App
