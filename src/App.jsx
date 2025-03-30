import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryListPage from './CountryListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/countries" element={<CountryListPage />} />
      </Routes>
    </Router>
  );
};

export default App;