import { BrowserRouter,Routes, Route } from 'react-router-dom';
import IngredientsPage from "./Components/ChickenCurry";
import HomePage from "./HomePage";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/ingredients" component={IngredientsPage} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;