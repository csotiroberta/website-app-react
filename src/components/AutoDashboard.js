import BackButton from "./BackButton";

const AutoDashboard = ({t}) => {
	return <>
		<h1>{t('portfolio.autoDashboard.title')}</h1>
		<BackButton t={t}/>
		<div className={'row'}>
			<div className={'col-4'}>

			</div>
			<div className={'col-8'}>

			</div>
		</div>
	</>
}

export default AutoDashboard