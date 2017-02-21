import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  fetch("http://localhost:3333").then(function(data){
    console.log(data,'data');
  });
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Hello World!!!!!!</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;
