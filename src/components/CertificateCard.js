import {Card} from 'primereact/card'

const CertificateCard = ({t, language, certificate}) => {

	const header = () => {
		// return <img alt={'card'} src={excelImage}/>
		return <img alt={'card'} src={require(`../pictures/certificates/${language}/${certificate}.png`)}/>
	}

	const footer = () => {
		return <p>{t(`certificate.${certificate}.footer`)}</p>
	}

	return<>
		<div className={"card flex justify-content-center"}>
			<Card className="md:w-25rem" title={t(`certificate.${certificate}.title`)} subTitle={t(`certificate.${certificate}.subTitle`)} header={header} footer={footer}>
				{t(`certificate.${certificate}.description`)}
			</Card>
		</div>
	</>
}

export default CertificateCard;