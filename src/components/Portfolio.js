import PortfolioCustom from './PortfolioCustom'

const Portfolio = ({t}) => {
	return <>
		<h1>
			{t("portfolio.title")}
		</h1>
		<div className={"row"}>
			<div className={"col-4 p-2"}>
				<PortfolioCustom t={t} color={'darkgrey'} theme={'autoDashboard'} inProgress={false}/>
			</div>
			<div className={"col-4 p-2"}>
				<PortfolioCustom t={t} color={'#A03232'} theme={'bloodDonation'} inProgress={true}/>
			</div>
		</div>
	</>
}

export default Portfolio