import image1 from '../pictures/projectHistory.png'
import image2 from '../pictures/planning.png'

const ProjektHistory = ({t}) => {
	return <div className={'row'}>
		<h1 className={"mb-3"}>{t('projectHistory.title')}</h1>
		<div className={'col-6'}>
			<img alt={t('projectHistory.image_1')} src={image1} style={{width: '70%'}}/>
			<h4 className={"my-3"}>{t('projectHistory.subTitle_1')}</h4>
			<p className={'fs-5'}>{t('projectHistory.description_1')}</p>
		</div>
		<div className={'col-6'}>
			<img alt={t('projectHistory.image_2')} src={image2} style={{width: '70%'}}/>
			<h4 className={"my-3"}>{t('projectHistory.subTitle_2')}</h4>
			<p className={'fs-5'}>{t('projectHistory.description_2')}</p>
		</div>
	</div>
}

export default ProjektHistory