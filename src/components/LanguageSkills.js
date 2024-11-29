import CountryFlags from "../pictures/flags.jpg"
import Language from "./Language";

const LanguageSkills = ({t}) => {
    const languages = t("language.languages", {returnObjects: true});
    return <>
        <div className={"container text-center"}>
            <h2 className={"text-decoration-underline pb-3"}>{t("language.title")}</h2>
            <div className={"row align-item-start"}>
                <div className={"col-6"}>
                    <img src={CountryFlags} alt={"County Flags"}/>
                </div>
                <div className={"col-6"}>
                    {languages.map((languages) => (
                        <Language languageName={languages.name} languageSkill={languages.description}/>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default LanguageSkills