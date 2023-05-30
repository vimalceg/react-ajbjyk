import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as d3 from 'd3';

import KTChart from './KTChart';
import ktjson from './clientteam/ktjson';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(ktjson);
    return <KTChart data={ktjson} />;
  }
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
