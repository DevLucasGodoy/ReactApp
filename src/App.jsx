import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/contato">Contato</Link></li>
    <li><Link to="/sobre">Sobre</Link></li>
    <li><Link to="/noticia1">Noticia1</Link></li>
    <li><Link to="/noticia2">Noticia2</Link></li>
    </ul>
    </Router>
  );
}

export default App;