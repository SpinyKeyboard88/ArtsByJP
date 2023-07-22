//import { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';

function App() {
  //  const [count, setCount] = useState(0)
  return (
    <Router>
      <nav>
        <ul>
          <li>
            Home
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App
