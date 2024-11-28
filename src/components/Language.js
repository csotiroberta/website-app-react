
const Language = ({
    languageName,
    languageSkill
}) => {
    return <div className={"row m-2 p-2"}>
        <div className={"col-4"} style={{background: "lightgray"}}><p className={"text-center"}>{languageName}</p></div>
        <div className={"col-8"}><p className={"text-start"}>{languageSkill}</p></div>
    </div>
}

export default Language