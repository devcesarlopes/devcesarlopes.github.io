import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Project } from './pages/Projects/Project';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <HashRouter basename="/">
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
        </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
