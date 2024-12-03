import PortfolioCustom from './PortfolioCustom'

const Portfolio = ({t}) => {
	return <div id={'portfolio'}>
		<h1>
			{t("portfolio.title")}
		</h1>
		<div className={"row"}>
			<div className={"col-4 p-2"}>
				<PortfolioCustom t={t} color={'darkgrey'} theme={'autoDashboard'} inProgress={false}/>
			</div>
			<div className={"col-4 p-2"}>
				<PortfolioCustom t={t} color={'brown'} theme={'bicycleDashboard'} inProgress={false}/>
			</div>
		</div>
	</div>
}

export default Portfolio