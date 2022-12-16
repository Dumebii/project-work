import './App.css';
import FirstHero from './components/FirstHero';
import NavScrollExample from './components/NavbarR';
import SecondHero from './components/SecondHero';


function App() {
  return (
    <div className=''>
    <div className=''>
      <NavScrollExample />
    </div>
      <div className='lg:flex flex-row mt-[3rem]'>
       <FirstHero />
       <SecondHero />
      </div>
    </div>
  );
}

export default App;
