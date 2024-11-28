import CertificateCard from './CertificateCard'

const Certificates = ({t, language}) => {
	return <>
		<div>
			<h1>{t('certificate.title')}</h1>
			<div className={'row'}>
				<div className={'col-4'}>
					<CertificateCard
						t={t}
						language={language}
						certificate={'excel_basics'}
					/>
				</div>
			</div>
		</div>
	</>
}

export default Certificates