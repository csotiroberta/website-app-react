import './App.css';
import "./styles/footer.css"
import "./styles/header.css"
import "./styles/common.css"
import MainPage from "./components/MainPage";
import LanguageSkills from "./components/LanguageSkills";
import { useTranslation } from 'react-i18next';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {Button} from "primereact/button";

function App() {
    const {i18n, t} = useTranslation();

    const changeL = (lang) => {
        i18n.changeLanguage(lang)
    };

  return (
    <div className="App">
      <header>
          <div className={'nav-cim'}>
              <div className={'d-grid gap-2 d-md-flex justify-content-md-end'}>
                  <Button className={'language-button'} onClick={() => changeL('hu')}><span className={'fi fi-hu'}/></Button>
                  <Button className={'language-button'} onClick={() => changeL('en')}><span className={'fi fi-gb'}/></Button>
                  <Button className={'language-button'} onClick={() => changeL('de')}><span className={'fi fi-de'}/></Button>
              </div>
              <p className={'nav-cim-header'}>{t('welcome')}</p>
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
