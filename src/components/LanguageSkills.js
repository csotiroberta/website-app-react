import CountryFlags from "../pictures/flags.jpg"
import Language from "./Language";

const LanguageSkills = () => {
    return <>
        <div className={"container text-center"}>
            <div className={"row align-item-start"}>
                <div className={"col-6"}>
                    <h2 className={"text-decoration-underline"}>Nyelvi készségeim</h2>

                    <img src={CountryFlags} alt={"County Flags"}/>
                </div>
                <div className={"col-6"}>
                    <Language languageName={"Magyar"} languageSkill={"Anyanyelv"}/>
                    <Language languageName={"Német"} languageSkill={"Társalgási szint / B2 típusú szóbeli és írásbeli nyelvvizsga"}/>
                    <Language languageName={"Angol"} languageSkill={"Társalgási szint"}/>
                    <Language languageName={"Koreai"} languageSkill={"Koreai nyelvi kurzus, képesítés azonosítója: T/2023/000268-1. Jelenleg is tanulom, online kurzus formájában."}/>
                    <Language languageName={"Kínai"} languageSkill={"2024. október óta online nyelvi kurzuson veszek részt, hogy elsajátítsam a kínai nyelv alapjait"}/>
                </div>
            </div>
        </div>
    </>
}

export default LanguageSkills