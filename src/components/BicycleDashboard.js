import BackButton from "./BackButton";
import BD_0 from "../pictures/bicycle/BD_0.png"

const BicycleDashboard = ({t}) =>{
    return <>
        <BackButton t={t}/>
        <div className={'row'}>
            <div className={'col-12'}>
                <h1>
                    {t('portfolio.bicycleDashboard.phase_1.title')}
                </h1>
                <img src={BD_0} alt={t('portfolio.bicycleDashboard.phase_1.title')} style={{width: '70%'}}/>
                <p className={"fs-3"}>{t('portfolio.bicycleDashboard.phase_1.description')}</p>
            </div>
        </div>
    </>
}

export default BicycleDashboard