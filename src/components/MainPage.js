import Profile from './Profile'
import LanguageSkills from './LanguageSkills'
import Certificates from './Certificates'
import Portfolio from './Portfolio'
import ProjektHistory from './ProjektHistory'

const MainPage = ({t, language}) => {
	return <>
		<div className={"py-3 my-2"}>
			<Profile t={t}/>
		</div>
		<div className={"py-3 my-2"}>
			<LanguageSkills t={t}/>
		</div>
		<div className={"p-3 my-2"}>
			<Certificates t={t} language={language}/>
		</div>
		<div className={"p-3 my-2"}>
			<ProjektHistory t={t}/>
		</div>
		<div className={"p-3 my-2"}>
			<Portfolio t={t}/>
		</div>
	</>
}

export default MainPage