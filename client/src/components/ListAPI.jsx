import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../components/css/styles.css"
//api key for photo: nLrM8ufBiJB6BGtHv0N5NYyEF3yfbW1tt73PCdnE6tPm6K75rlD9oaHi


const ListAPI = () => {
  const [recipeResult, setRecipeResult] = useState([])
  const [inputField, setInputField] = useState('')
 
  console.log(inputField)
  const apiFetch = async () => { 
    let inputArray = inputField.split(" ")
    // console.log(inputArray);
    let input = inputArray.join("%20")
    // console.log(input)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a6c84714aamshd7312f736a5f530p1a827bjsn8c619e6200a6',
        'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
      }
    };
    try {
      let response = await fetch(`https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=${input}`, options)
      let data = await response.json()
      console.log(data)
      setRecipeResult(data)
      console.log(recipeResult);
    } catch (error) {
      console.log(error);
    }
   }
  
  const handleSearch = () => {
    apiFetch()
  }
  return (
    <>
    {recipeResult.length === 0 ?
     <div className="onlySearch">

      <div className="search-container">
        <div className="searchBar">
          <input type="search" class="form-control border-secondary " value={inputField} onChange={e=>setInputField(e.target.value)} />
        </div>
        
        <div class="input-group-append">
          <button class="btn btn-outline-secondary searchBtt" type="button" onClick={()=> handleSearch()}>
              Search 
          </button>
        </div>
      </div>
     
     </div>

     :
     <div className="searchWithContent">
      
      <div className="search-container2">
        <div className="search-box">
          <div className="searchBar">
            <input type="search" class="form-control border-secondary " value={inputField} onChange={e=>setInputField(e.target.value)} />
          </div>
          
          <div class="input-group-append">
            <button class="btn btn-outline-secondary searchBtt" type="button" onClick={()=> handleSearch()}>
                Search 
            </button>
          </div>
        </div>

        <div className="recipe-container">
        
          {recipeResult.map(recipe => {
            return (
            <Card style={{ width: '25vw', height: '70vh', marginBottom: '1rem', overflowY: "auto"}}>
              <Card.Img variant="top" src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" style={{  height: "35vh", objectFit: "fill"}} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                  {recipe.instructions}
                </Card.Text>
                <h6>Ingredients:</h6>
                <ul>
                {recipe.ingredients.map(ingredient =>{
                  return (
                    <li>{ingredient}</li>
                  )
                })}
                </ul>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="warning">Add to Todo</Button>
              </Card.Body>
            </Card>
            )
          })}
        </div>

      </div>
     </div>
  }
     
    
    
    </>
  )
}

export default ListAPI