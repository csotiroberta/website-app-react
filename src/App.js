import './App.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/common.css'
import {useTranslation} from 'react-i18next'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import {Button} from 'primereact/button'
import {useState} from 'react'
import MainPage from './components/MainPage'
import {Route, Routes} from 'react-router-dom'
import AutoDashboard from './components/AutoDashboard'
import BicycleDashboard from './components/BicycleDashboard'
import ScrollToTop from './ScrollToTop'

function App() {
	const [language, setLanguage] = useState('hu')
	const {i18n, t} = useTranslation()

	const changeL = (lang) => {
		i18n.changeLanguage(lang)
		setLanguage(lang)
	}

	return (
		<div className="App">
			<header>
				<div className={'nav-cim'}>
					<p className={'text-center'}>{t('welcome')}</p>
					<div className={'d-grid gap-2 d-md-flex justify-content-md-end'}>
						<Button className={'language-button'} onClick={() => changeL('hu')}><span className={'fi fi-hu'}/></Button>
						<Button className={'language-button'} onClick={() => changeL('en')}><span className={'fi fi-gb'}/></Button>
						<Button className={'language-button'} onClick={() => changeL('de')}><span className={'fi fi-de'}/></Button>
					</div>
				</div>
			</header>
			<main style={{padding: '3rem'}}>
					<ScrollToTop/>
					<Routes>
						<Route path={'/website-app-react'} element={<MainPage t={t} language={language}/>}/>
						<Route path={'/autoDashboard'} element={<AutoDashboard t={t}/>}/>
						<Route path={'/bicycleDashboard'} element={<BicycleDashboard t={t}/>}/>
					</Routes>
			</main>
			<footer>
				<p>
					Csóti Roberta
				</p>
			</footer>
		</div>
	)
}

export default App
