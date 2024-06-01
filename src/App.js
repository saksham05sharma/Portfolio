import Experiences from './Components/Experiences/Experiences';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import BackgroundView from './layout/BackgroundView';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <BackgroundView>
        <div className='font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500'>
          <Navbar />
          <Main />
          <Projects />
          <Experiences />
          <Contact />
        </div>
      </BackgroundView>
    </div>
  );
}

export default App;
