import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Footer from './components/everypage/footer.jsx';
import './scss/index.scss'
import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)
