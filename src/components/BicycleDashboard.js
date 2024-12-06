import BackButton from './BackButton'
import BD_0 from '../pictures/bicycle/BD_0.png'
import BD_1 from '../pictures/bicycle/BD_1.png'
import BD_2 from '../pictures/bicycle/BD_2.png'
import BD_3 from '../pictures/bicycle/BD_3.png'
import BD_4 from '../pictures/bicycle/BD_4.png'
import BD_5 from '../pictures/bicycle/BD_5.png'
import BD_6 from '../pictures/bicycle/BD_6.png'
import BD_7 from '../pictures/bicycle/BD_7.png'
import BD_8 from '../pictures/bicycle/BD_8.png'
import BD_9 from '../pictures/bicycle/BD_9.png'
import BD_10 from '../pictures/bicycle/BD_10.png'
import BD_11 from '../pictures/bicycle/BD_11.png'
import BD_12 from '../pictures/bicycle/BD_12.png'
import BD_13 from '../pictures/bicycle/BD_13.png'
import {Button} from 'primereact/button'

const BicycleDashboard = ({t}) => {

	return <div style={{paddingLeft: '10%', paddingRight: '10%'}}>
		<BackButton t={t}/>
		<div className={'row'}>
			<div className={'col-12'}>
				<h1>
					{t('portfolio.bicycleDashboard.phase_1.title')}
				</h1>
				<img src={BD_0} alt={t('portfolio.bicycleDashboard.phase_1.title')} style={{width: '70%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_1.description')}</p>
			</div>
		</div>
		<div className={'row align-items-center mt-5'}>
			<div className={'col-5'}>
				<p className={'fs-4 text-start'}>{t('portfolio.bicycleDashboard.phase_2.description')}</p>
			</div>
			<div className={'col-7'}>
				<img src={BD_1} alt={t('portfolio.bicycleDashboard.phase_2.title')} style={{width: '100%'}}/>
			</div>
		</div>
		<div className={'row mt-5 text-start'}>
			<div className={'col-12'}>
				<h2>{t('portfolio.bicycleDashboard.phase_3.title')}</h2>
				<h3 className={'mt-5'}>{t('portfolio.bicycleDashboard.phase_3.subtitle_1')}</h3>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_3.description_1')}</p>
				<h3 className={'mt-5'}>{t('portfolio.bicycleDashboard.phase_3.subtitle_2')}</h3>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_3.description_2')}</p>
				<h3 className={'mt-5'}>{t('portfolio.bicycleDashboard.phase_3.subtitle_3')}</h3>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_3.description_3')}</p>
			</div>
		</div>
		<img className={'justify-content-center'} src={BD_2} alt={t('portfolio.bicycleDashboard.phase_3.title')} style={{width: '80%'}}/>
		<div className={'row mt-5 text-start'}>
			<div className={'col-12'}>
				<h4>{t('portfolio.bicycleDashboard.phase_4.description')}</h4>
			</div>
		</div>
		<div className={'row mt-3'}>
			<div className={'col-4'}>
				<img alt={t('portfolio.bicycleDashboard.phase_4.image_1')} src={BD_3} style={{width: '100%'}}/>
			</div>
			<div className={'col-4'}>
				<img alt={t('portfolio.bicycleDashboard.phase_4.image_2')} src={BD_5} style={{width: '100%'}}/>
			</div>
			<div className={'col-4'}>
				<img alt={t('portfolio.bicycleDashboard.phase_4.image_2')} src={BD_4} style={{width: '100%', height: '85%'}}/>
			</div>
		</div>
		<div className={'row mt-1 align-items-center text-start'}>
			<h1 className={'mb-5'}>{t('portfolio.bicycleDashboard.phase_5.title')}</h1>
			<div className={'col-3 justify-content-start'}>
				<h4>{t('portfolio.bicycleDashboard.phase_5.description')}</h4>
			</div>
			<div className={'col-3 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_5.image_1')} src={BD_6} style={{width: '60%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_5.image_1')}</p>
			</div>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_5.image_2')} src={BD_7} style={{width: '100%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_5.image_2')}</p>
			</div>
		</div>
		<div className={'row mt-4 align-items-center text-start'}>
			<div className={'col-3 justify-content-start'}>
				<h3>{t('portfolio.bicycleDashboard.phase_6.description')}</h3>
			</div>
			<div className={'col-3 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_6.image_1')} src={BD_8} style={{width: '100%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_6.image_1')}</p>
			</div>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_6.image_2')} src={BD_9} style={{width: '100%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_6.image_2')}</p>
			</div>
		</div>
		<div className={'row mt-4 align-items-center text-start'}>
			<h3>{t('portfolio.bicycleDashboard.phase_7.description')}</h3>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_7.image_1')} src={BD_10} style={{width: '90%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_7.image_1')}</p>
			</div>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_7.image_2')} src={BD_11} style={{width: '100%'}}/>
				<p className={'fs-4'}>{t('portfolio.bicycleDashboard.phase_7.image_2')}</p>
			</div>
		</div>
		<div className={'row mt-4 align-items-center text-start'}>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_8.image_1')} src={BD_12} style={{width: '80%'}}/>
			</div>
			<div className={'col-6 text-start'}>
				<h2 className={'my-5'}>{t('portfolio.bicycleDashboard.phase_8.description_1')}</h2>
				<h3 className={'my-5'}>{t('portfolio.bicycleDashboard.phase_8.description_2')}</h3>
				<h3 className={'my-5'}>{t('portfolio.bicycleDashboard.phase_8.description_3')}</h3>
			</div>
		</div>
		<div className={'row mt-4 align-items-center text-start'}>
			<h1 className={'my-3'}>{t('portfolio.bicycleDashboard.phase_9.title')}</h1>
			<h3 className={'my-3'}>{t('portfolio.bicycleDashboard.phase_9.subtitle')}</h3>
			<div className={'col-6 text-center'}>
				<img alt={t('portfolio.bicycleDashboard.phase_9.image')} src={BD_13} style={{width: '100%'}}/>
			</div>
			<div className={'col-6 text-start'}>
				<h3 className={'my-5'}>{t('portfolio.bicycleDashboard.phase_9.description')}</h3>
			</div>
		</div>
		<div className={'row mt-5'}>
			<div className={'col-6 text-end'}>
				<p className={'fs-3'}>{t('common.excelLabel')}</p>
			</div>
			<div className={'col-6 text-start'}>
				<Button
					label={t('common.buttonLabel')}
					icon={'pi pi-cloud-download'}
					link={true}
					onClick={() => {
						window.open(`https://drive.google.com/drive/folders/1qTY_KEi9NeqRjXLN5BG6hIyiccJlfLk_?usp=drive_link`)
					}}
					style={{background: 'lightblue', border: 'none', color: 'black', fontSize: '20px'}}
				/>
			</div>
		</div>
	</div>
}

export default BicycleDashboard