const Footer = ({t}) => {
	return <div className={'container-fluid'}>
		<div className={'row text-center align-items-center'}>
			<div className={'col-5'}>
				<p className={"fs-5"}>{t('footer.description')}</p>
			</div>
			<div className={'col-3'}>
				<p className={'fs-4'}><i className={'pi pi-inbox px-3'}/>{t('footer.email')}</p>
			</div>
			<div className={'col-3'}>
				<a className={"mx-2"} href={'https://www.linkedin.com/in/robertacsoti/'} style={{color: 'white'}}><i className={'pi pi-linkedin px-3'}/>{t('footer.media_3')}</a>
				<a className={"mx-2"} href={'https://www.instagram.com/cstiroberta/'} style={{color: 'white'}}><i className={'pi pi-instagram px-3'}/>{t('footer.media_1')}</a>
				<a className={"mx-2"} href={'https://www.facebook.com/roberta.csoti'} style={{color: 'white'}}><i className={'pi pi-facebook px-3'}/>{t('footer.media_2')}</a>
			</div>
			<div className={'col-1'}>
				<p className={'fs-5'}><i className={'pi pi-map-marker px-3'} style={{fontSize: '1rem', color: 'white'}}/>{t('footer.town')}</p>
			</div>
		</div>
	</div>
}

export default Footer