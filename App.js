import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import product from './product';



const App = () => {
  const userName = "Parfait"; 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <Name name={product.name} />
              <Price  price={product.price}/>
              <Description  description={product.description}/>
              <Image  imageUrl={product.imageUrl}/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {userName ? (
          <div>
            <p>Bonjour, {userName} !</p>
            <img src="https://picsum.photos/100" alt="Image" />
          </div>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </div>
  );
};

export default App;
