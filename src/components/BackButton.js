import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

const BackButton = ({t}) => {
    const navigate = useNavigate()
    return <Button
        label={t("portfolio.backButtonLabel")}
        icon={"pi pi-angle-left"}
        className={"mb-4"}
        link={true}
        onClick={() => navigate(`/website-app-react`)}
        style={{background: '#009090', border: 'none', color: 'black', position: 'fixed', bottom:'5%', left:'50px'}}
    />
}

export default BackButton