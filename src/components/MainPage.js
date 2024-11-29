import Profile from './Profile'
import LanguageSkills from './LanguageSkills'
import Certificates from './Certificates'
import Portfolio from './Portfolio'

const MainPage = ({t, language}) => {
	return <>
		<div className={"py-3 my-2 border border-info"}>
			<Profile t={t}/>
		</div>
		<div className={"py-3 my-2 border border-info"}>
			<LanguageSkills t={t}/>
		</div>
		<div className={"p-3 my-2 border border-info"}>
			<Certificates t={t} language={language}/>
		</div>
		<div className={"p-3 my-2 border border-info"}>
			<Portfolio t={t}/>
		</div>
	</>
}

export default MainPage