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
        style={{background: 'lightgray', border: 'none', color: 'black', position: 'absolute', top:'19%', left:'50px'}}
    />
}

export default BackButton