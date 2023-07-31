
import './App.css';

import Item from './components/Item';
function App() {

  const item = [{
    name: "Computer",
    price: 1000, date:
    new Date(2023, 3, 12), 
    
  },
    {
      name: "Tablet",
      price: 1000, date:
      new Date(2023, 3, 12), 
      
    }
  ]

  return (
    <div className="App">
      <div>qwdqwd</div>
      <Item item={item} />
      <Item item={item} />
    </div>
  );
}

export default App;
