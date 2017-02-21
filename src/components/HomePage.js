import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  console.log('yea...');
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      name: 'starbucks'
    })
  };
  fetch("http://localhost:3333", fetchOptions)
  .then(function(data){
    return data.json();
  }).then(function(json){
    console.log(json);
  });
  console.log('test');
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
