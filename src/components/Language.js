
const Language = ({
    languageName,
    languageSkill
}) => {
    return <div className={"row m-2 align-item-start"}>
        <div className={"col-4"} style={{background: "lightgray"}}><p className={"bold"}>{languageName}</p></div>
        <div className={"col-8"}><p>{languageSkill}</p></div>
    </div>
}

export default Language