import Header from "./Header"
import NewSmoothieForm from "./NewSmoothieForm"
import Search from "./Search"
import SmoothieList from "./SmoothieList"
import NavBar from "./NavBar"
import {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom"

function App() {

  const [searchText, setSearchText] = useState("")
  const [formData, setFormData] = useState({})
  const [smoothies, setSmoothies] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/smoothies")
    .then(response => response.json())
    .then(smoothieData => setSmoothies(smoothieData))
  }, [])

  const filteredSmoothies = smoothies.filter(smoothie => {
    if(searchText === ""){
      return true
    }
    return smoothie.name.toLowerCase().includes(searchText.toLowerCase())
  })

  function addSmoothie(event){
    event.preventDefault()

    fetch("http://localhost:8000/smoothies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newSmoothie => setSmoothies([...smoothies, newSmoothie]))
  }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="app">
      <Header />
      <NavBar/>
      <Switch>
        <Route path="/add_smoothie">
          <NewSmoothieForm addSmoothie={addSmoothie} updateFormData={updateFormData} />
        </Route>
        <Route path="/search">
          <Search setSearchText={setSearchText} searchText={searchText} />
          <SmoothieList smoothies={filteredSmoothies}/>
        </Route>
        <Route exact path="/">
          <h2>Welcome! Here is the list of smoothies available:</h2>
          <SmoothieList smoothies={smoothies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;