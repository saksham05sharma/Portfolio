import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import BackgroundView from './layout/BackgroundView';

function App() {
  return (
    <div className="App">
      <BackgroundView>
        <div className='font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500'>
          <Navbar />
          <Main />
        </div>
      </BackgroundView>
    </div>
  );
}

export default App;
