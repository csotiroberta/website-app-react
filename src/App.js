import './App.css';
import "./styles/footer.css"
import "./styles/header.css"
import "./styles/common.css"
import MainPage from "./components/MainPage";
import LanguageSkills from "./components/LanguageSkills";

function App() {
  return (
    <div className="App">
      <header>
          <div className={'nav-cim'}>
              <h3 className={'nav-cim-header'}>Portfólia oldal</h3>
          </div>
      </header>
        <main style={{padding: "3rem"}}>
            <MainPage/>
            <LanguageSkills/>
        </main>
        <footer>
            <p>
            Csóti Roberta
            </p>
        </footer>
    </div>
  );
}

export default App;
