import Hero from './components/Hero';
import Services from './components/Services';
// import FetchApi from './api'
import './styles.scss';
import ApiAxios from './ApiAxios';

function App() {
  return (
    <>
    <Hero/>
    <Services/>
    {/* <FetchApi/> */}
    <ApiAxios/>
    </>
  );
}

export default App;
