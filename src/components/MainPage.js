import ProfilePic from "../pictures/profil.jpg"
import {Button} from "primereact/button";

const MainPage = () => {
   return <>
    <div className={"container text-center"}>
        <div className={"row align-items-start"}>
            <div className={"col-6"}>
                <div>
                    <img
                        src={ProfilePic}
                        alt={"Profile picture"}
                        style={{height: "15rem"}}
                    />
                </div>
                <div>
                    <h2>Csóti Roberta</h2>
                    <h3>Jogi asszisztens | Menedzser-asszisztens</h3>
                </div>
                <div className={"pt-2"}>
                    <p className={'fs-2'}><i className={'pi pi-inbox px-3'} style={{fontSize: '1.5rem', color: 'green'}}/>roberta.csoti@gmail.com</p>
                </div>
                <div className={"pb-2"}>
                    <p className={'fs-2'}><i className={'pi pi-map-marker px-3'} style={{fontSize: '1.5rem', color: 'green'}}/>Szeged</p>
                </div>
                <div className={'p-3'}>
                    <a href={'https://www.linkedin.com/in/robertacsoti/'}><i className={"pi pi-linkedin px-3"} style={{fontSize: '2rem', color: '#0077B5'}}/></a>
                    <a href={'https://www.instagram.com/cstiroberta/'}><i className={"pi pi-instagram px-3"} style={{fontSize: '2rem', color: 'purple'}}/></a>
                    <a href={'https://www.facebook.com/roberta.csoti'}><i className={"pi pi-facebook px-3"} style={{fontSize: '2rem', color: 'blue'}}/></a>
                </div>
            </div>
            <div className={"col-6"}>
                <h1>Rólam</h1>
                <p className={"text-start fs-4"}>
                    Felsőfokú gazdasági menedzser-asszisztensként
                    végeztem a Szegedi Tudományegyetem
                    Gazdaságtudományi Karán. Jelenleg jogi asszisztensként
                    dolgozom. Szenvedélyesen törekszem tudásom és
                    készségeim folyamatos fejlesztésére. Számos
                    nyelvtanfolyamon és adatelemzői workshopon vettem
                    és veszek részt jelenleg is.
                </p>
                <Button label={'Tanúsítványok'} severity={"secondary"} className={"m-3 w-25"}/>
                <Button label={'Portfóliók'} severity={"secondary"} className={"m-3 w-25"}/>
            </div>
        </div>
    </div>
   </>
}

export default MainPage;