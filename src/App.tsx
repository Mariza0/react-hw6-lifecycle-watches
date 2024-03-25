import './App.css';
import { Card } from './components/Сard';
import defaultImg from './img/card.png';

function App() {
  

  return (
    
      <div className="container">
    
            <Card  title="Card title"
                   description="Some quick example text to build on the card title and make up the bulk of the card's content."
                   link="Go somewhere" 
            >
                <img className="card-img" src={defaultImg} alt="Card image" />
            </Card>

            <Card  title="Special title treatment"
                   description="Whith supporting text below as a natural lead-in to additional content"
                   link="Go somewhere" 
            >
            </Card>
  
      </div>
  )
}

export default App
