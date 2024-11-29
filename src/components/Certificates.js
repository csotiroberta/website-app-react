import CertificateCard from './CertificateCard'

const Certificates = ({t, language}) => {
	return <>
		<div id={'certificate'}>
			<h1>{t('certificate.title')}</h1>
			<div className={'row'}>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'excel_basics'}
					/>
				</div>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'excel_intermediate'}
					/>
				</div>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'excel_expert'}
					/>
				</div>
			</div>
			<div className={'row'}>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'excel_dashboard'}
					/>
				</div>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'data_visualization'}
					/>
				</div>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'data_analyst_basic'}
					/>
				</div>
			</div>
		</div>
	</>
}

export default Certificates