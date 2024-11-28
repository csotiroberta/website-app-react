import './App.css';
import "./styles/footer.css"
import "./styles/header.css"
import "./styles/common.css"
import MainPage from "./components/MainPage";
import LanguageSkills from "./components/LanguageSkills";
import { useTranslation } from 'react-i18next';

function App() {
    const {i18n, t} = useTranslation();

    const changeL = (lang) => {
        i18n.changeLanguage(lang)
    };

  return (
    <div className="App">
      <header>
          <div className={'nav-cim'}>
              <h3 className={'nav-cim-header'}>{t('welcome')}</h3>
              <div>
                  <button onClick={() => changeL('en')}>English</button>
                  <button onClick={() => changeL('hu')}>Magyar</button>
              </div>
          </div>
      </header>
        <main style={{padding: '3rem'}}>
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
