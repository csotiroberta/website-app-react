import ProfilePic from "../pictures/profil.jpg"
import {Button} from "primereact/button";

const Profile = ({t}) => {
   return <>
    <div className={"container text-center"}>
        <div className={"row align-items-start"}>
            <div className={"col-6"}>
                <div>
                    <img
                        src={ProfilePic}
                        alt={"Profile picture"}
                        style={{height: "15rem", borderRadius: '50%'}}
                    />
                </div>
                <div>
                    <h2>{t("profile.name")}</h2>
                    <h4>{t("profile.work")}</h4>
                </div>
                <div className={"pt-2"}>
                    <p className={'fs-3'}><i className={'pi pi-inbox px-3'} style={{fontSize: '1.5rem', color: 'green'}}/>{t("profile.email")}</p>
                </div>
                <div className={"pb-2"}>
                    <p className={'fs-3'}><i className={'pi pi-map-marker px-3'} style={{fontSize: '1.5rem', color: 'green'}}/>{t("profile.town")}</p>
                </div>
                <div className={'p-3'}>
                    <a href={'https://www.linkedin.com/in/robertacsoti/'}><i className={"pi pi-linkedin px-3"} style={{fontSize: '2rem', color: '#0077B5'}}/></a>
                    <a href={'https://www.instagram.com/cstiroberta/'}><i className={"pi pi-instagram px-3"} style={{fontSize: '2rem', color: 'purple'}}/></a>
                    <a href={'https://www.facebook.com/roberta.csoti'}><i className={"pi pi-facebook px-3"} style={{fontSize: '2rem', color: 'blue'}}/></a>
                </div>
            </div>
            <div className={"col-6"}>
                <h1>{t("profile.about")}</h1>
                <p className={"text-start fs-4"}>{t("profile.description")}</p>
                <Button label={t("profile.certificateButton")} severity={"secondary"} className={"m-3 w-25"}/>
                <Button label={t("profile.portfolioButton")} severity={"secondary"} className={"m-3 w-25"}/>
            </div>
        </div>
    </div>
   </>
}

export default Profile;