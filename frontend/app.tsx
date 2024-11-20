import React, { useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  useEffect(() => {
    axios.get('/api').then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div>Frontend conectado ao Backend!</div>;
};

export default App;
