import './App.css';
import FirstHero from './components/FirstHero';
import NavScrollExample from './components/NavbarR';
import SecondHero from './components/SecondHero';


function App() {
  return (
    <div className=''>
    <div className='lg:pl-40 mt-6'>
      <NavScrollExample />
    </div>
      <div className='flex flex-row mt-[5rem]'>
       <FirstHero />
       <SecondHero />
      </div>
    </div>
  );
}

export default App;
