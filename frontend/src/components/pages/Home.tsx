import React from 'react';
///
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';

import LayoutHome from '../layouts/LayoutHome';
const Home = () => {
  const [theme, setTheme] = React.useState(dark);

  return (
    <LayoutHome>
      <h1>Bem-vindo à Home</h1>
    </LayoutHome>
  );
};

export default Home;
