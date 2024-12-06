import AD_1 from "../pictures/auto/AD_0_2.png";
import AD_2 from "../pictures/auto/AD_1.png";
import AD_3 from "../pictures/auto/AD_2.png";
import AD_4 from "../pictures/auto/AD_2_1.png";
import AD_5 from "../pictures/auto/AD_3.png";
import AD_6 from "../pictures/auto/AD_4.png";
import AD_7 from "../pictures/auto/AD_5.png";
import AD_8 from "../pictures/auto/AD_6.png";
import AD_9 from "../pictures/auto/AD_7.png";
import AD_10 from "../pictures/auto/AD_8.png";
import AD_11 from "../pictures/auto/AD_9.png";
import AD_12 from "../pictures/auto/AD_10.png";
import AD_13 from "../pictures/auto/AD_11.png";
import AD_14 from "../pictures/auto/AD_12.png";
import AD_15 from "../pictures/auto/AD_13.png";
import BackButton from './BackButton'
import DriveButton from './DriveButton'

const AutoDashboard = ({t}) => {
	return <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
		<BackButton t={t}/>
		<div className={'row text-start mb-4'}>
			<h1>{t('portfolio.autoDashboard.title')}</h1>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.autoDashboard.phase_1.image_1')} src={AD_1} style={{width: '80%'}}/>
				<h4 className={"mt-2"}>{t('portfolio.autoDashboard.phase_1.title_1')}</h4>
				<p className={'fs-6'}>{t('portfolio.autoDashboard.phase_1.description_1')}</p>
			</div>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.autoDashboard.phase_1.image_1')} src={AD_2} style={{width: '93%'}}/>
				<h4 className={"mt-2"}>{t('portfolio.autoDashboard.phase_1.title_2')}</h4>
				<p className={'fs-6'}>{t('portfolio.autoDashboard.phase_1.description_2')}</p>
			</div>
		</div>
		<div className={'row text-start align-items-center my-3'}>
			<div className={"col-5"}>
				<p className={"fs-3"}>{t('portfolio.autoDashboard.phase_2.description_1')}</p>
			</div>
			<div className={"col-7 text-center"}>
				<img src={AD_3} alt={t('portfolio.autoDashboard.phase_2.image_1')} style={{width: '90%'}}/>
			</div>
		</div>
		<div className={'row text-start align-items-center my-3'}>
			<div className={"col-8 text-center"}>
				<img src={AD_4} alt={t('portfolio.autoDashboard.phase_2.image_2')} style={{width: '100%'}}/>
			</div>
			<div className={"col-4"}>
				<p className={"fs-5"}>{t('portfolio.autoDashboard.phase_2.description_2')}</p>
			</div>
		</div>
		<div className={'row text-start my-3'}>
			<h2>{t('portfolio.autoDashboard.phase_3.title')}</h2>
			<p className={"fs-4 mt-3"}>{t('portfolio.autoDashboard.phase_3.description_1')}</p>
			<p className={"fs-5 my-3"}>{t('portfolio.autoDashboard.phase_3.description_2')}</p>
			<div className={'col-12 text-center mt-3'}>
				<img src={AD_5} alt={t('portfolio.autoDashboard.phase_3.image')} style={{width: '80%'}}/>
			</div>
		</div>
		<div className={'row my-3 align-items-center'}>
			<h3>{t('portfolio.autoDashboard.phase_4.title')}</h3>
			<div className={"col-3 text-start"}>
				<p className={"fs-3"}>{t('portfolio.autoDashboard.phase_4.description_1')}</p>
			</div>
			<div className={"col-3 border border-top-0 border-start-0 border-bottom-0 border-secondary"}>
				<img src={AD_6} alt={t('portfolio.autoDashboard.phase_4.image_1')} style={{width: "60%"}}/>
			</div>
			<div className={"col-6"}>
				<div className={"row my-5 align-items-center"}>
					<div className={"col-6"}>
						<p className={"fs-5"}>{t('portfolio.autoDashboard.phase_4.description_2')}</p>
					</div>
					<div className={"col-6"}>
						<img src={AD_7} alt={t('portfolio.autoDashboard.phase_4.image_2')} style={{width: "100%"}}/>
					</div>
				</div>
				<div className={"row my-5 align-items-center"}>
					<div className={"col-6"}>
						<p>{t('portfolio.autoDashboard.phase_4.description_3')}</p>
					</div>
					<div className={"col-6"}>
						<img src={AD_8} alt={t('portfolio.autoDashboard.phase_4.image_3')} style={{width: "100%"}}/>
					</div>
				</div>
			</div>
		</div>
		<div className={"row my-2"}>
			<div className={"col-12"}>
				<p className={"fs-5"}>{t('portfolio.autoDashboard.phase_5.description')}</p>
				<img alt={t('portfolio.autoDashboard.phase_5.image_1')} src={AD_9} style={{width: '60%'}} className={'mb-3'}/>
				<img alt={t('portfolio.autoDashboard.phase_5.image_1')} src={AD_10} style={{width: '50%'}}/>
			</div>
		</div>
		<div className={"row my-5"}>
			<div className={"col-6"}>
				<h3 className={"my-5"}>{t('portfolio.autoDashboard.phase_6.title')}</h3>
				<img className={"mb-5"} alt={t('portfolio.autoDashboard.phase_6.image_1')} src={AD_11} style={{width: '100%'}}/>
				<p className={"fs-4 mt-5"}>{t('portfolio.autoDashboard.phase_6.description_1')}</p>
			</div>
			<div className={"col-6"}>
				<img alt={t('portfolio.autoDashboard.phase_6.image_2')} src={AD_12} style={{width: '90%'}}/>
				<p className={"fs-5"}>{t('portfolio.autoDashboard.phase_6.description_2')}</p>
			</div>
		</div>
		<div className={"row my-5 text-start"}>
			<h1>{t('portfolio.autoDashboard.phase_7.title')}</h1>
			<p>{t('portfolio.autoDashboard.phase_7.description_1')}</p>
			<img src={AD_13} alt={t("portfolio.autoDashboard.phase_7.image")}/>
			<div className={"col-6 mt-4"}>
				<h4 className={"text-decoration-underline"}>{t('portfolio.autoDashboard.phase_7.subtitle_1')}</h4>
				<p className={"fs-5"}>{t('portfolio.autoDashboard.phase_7.description_2')}</p>
			</div>
			<div className={"col-6 mt-4"}>
				<h4 className={"text-decoration-underline"}>{t('portfolio.autoDashboard.phase_7.subtitle_2')}</h4>
				<p className={"fs-5"}>{t('portfolio.autoDashboard.phase_7.description_3')}</p>
			</div>
		</div>
		<div className={"row my-5 text-center"}>
			<div className={'col-12'}>
				<img src={AD_14} alt={t('portfolio.autoDashboard.phase_8.image_1')}/>
				<p className={"fs-3 mt-4"}>{t('portfolio.autoDashboard.phase_8.description_1')}</p>
			</div>
		</div>
		<div className={"row my-5 text-center"}>
			<div className={'col-12'}>
				<img src={AD_15} alt={t("portfolio.autoDashboard.phase_8.image_2")}/>
				<p className={"fs-3 mt-4"}>{t('portfolio.autoDashboard.phase_8.description_2')}</p>
			</div>
		</div>
		<DriveButton t={t}/>
	</div>
}

export default AutoDashboard