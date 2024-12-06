import {Button} from 'primereact/button'

const DriveButton = ({t}) => {
	return <div className={'row mt-5'}>
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
}

export default DriveButton