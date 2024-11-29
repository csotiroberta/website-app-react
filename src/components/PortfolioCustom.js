import {Button} from 'primereact/button'
import {useNavigate} from 'react-router-dom'

const PortfolioCustom = ({t, color, theme, inProgress}) => {
	const navigate = useNavigate()

	return <div className={"box p-3 mx-4"} style={{background: `${color}`}}>
		<h2>
			{t(`portfolio.${theme}.title`)}
		</h2>
		{inProgress ? <h4>{t("portfolio.workInProgress")}</h4> : <></>}
		<img alt={"Autó Dashboard"} src={require(`../pictures/${theme}.png`)} width={"40%"}/>
		<p className={"fs-5"}>{t(`portfolio.${theme}.description`)}</p>
		<Button
			label={t("portfolio.buttonLabel")}
			icon={"pi pi-angle-right"}
			className={"mb-4"}
			disabled={inProgress}
			link={!inProgress}
			onClick={() => navigate(`/${theme}`)}
			style={{background: 'white', border: 'none', color: 'black'}}
		/>
	</div>
}

export default PortfolioCustom