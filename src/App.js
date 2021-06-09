import LineStepper from "./components/LineStepper";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
      <div>
        <Header />
        {/* <main> */}
          {/* <h1>show yourself</h1> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          <LineStepper /> 
        {/* </main> */}
        <Footer />
      </div>
  );
}

export default App;
