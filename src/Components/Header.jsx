import '../Styles/Header.css'
import Persona from '../Components/Persona';

function Header(props){
    
    const Datos = [
        {
            name: "Patrick Michael Pumaccahua Huallpa",
            career: "Ingeniería Informática y de Sistemas",
            img: "https://cdn.pixabay.com/photo/2021/03/22/13/48/copyright-6114655_1280.jpg"
        },
        {
            name: "Max Erixon Toledo Bernal",
            career: "Ingeniería Informática y de Sistemas",
            img: "https://cdn.pixabay.com/photo/2021/03/22/13/48/copyright-6114655_1280.jpg"
        },
        {
            name: "Ronil Nilo Torres Bautista",
            career: "Ingeniería Informática y de Sistemas",
            img: "https://cdn.pixabay.com/photo/2021/03/22/13/48/copyright-6114655_1280.jpg"
        },
        {
            name: "Yeferson Supa Cusipaucar",
            career: "Ingeniería Informática y de Sistemas",
            img: "https://cdn.pixabay.com/photo/2021/03/22/13/48/copyright-6114655_1280.jpg"
        },
        {
            name: "Maria Jesus Villcas Quispe",
            career: "Ingeniería Quimica",
            img: "https://cdn.pixabay.com/photo/2021/03/22/13/48/copyright-6114655_1280.jpg"
        },
        {
            name: "Michael Sarmiento Huillca",
            career: "Ingeniería Electrónica",
            img: "https://cdn.pixabay.com/photo/2021/03/22/13/48/copyright-6114655_1280.jpg"
        }
    ];

    let Perfiles = [];

    for (let k =0; k<Datos.length;k++){
        Perfiles.push(
            <Persona
                name = {Datos[k].name}
                career = {Datos[k].career}
                img = {Datos[k].img} 
            ></Persona>
        );
    }

    return (<>
        
        <div className="header">
            <div className="logo">
                <img src="../../public/logo.png" alt="" />
                <div>
                    <p className='p1'>Connected</p>
                    <p className='p2'>Ear</p>
                </div>
            </div>
            <div className="algo">NASA Space Apps 2024</div>
            <div className="container">
                <div className="nameTeam">SIX GALAX</div>
                {Perfiles}
            </div>
        </div>

    </>);
}

export default Header;