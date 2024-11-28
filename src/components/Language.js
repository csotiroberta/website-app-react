
const Language = ({
    languageName,
    languageSkill
}) => {
    return <div className={"row py-3"}>
        <div className={"col-4 justify-content-center align-self-center"} style={{background: "lightgray"}}><p>{languageName}</p></div>
        <div className={"col-8 justify-content-center align-self-center"}><p className={"text-start"}>{languageSkill}</p></div>
    </div>
}

export default Language