import React from 'react';
import axios from 'axios';
import Card from '../src/components/Card/Card'
function App() {
  return (
    <div className="App">
      {
        cardData.map((elem, index) =>
          <Card key={index} title={elem.title}
            price={elem.price}
            description={elem.description}
            imgLink={elem.imgLink}
          ></Card>
        )
      }
    </div>
  );
}

export default App;
