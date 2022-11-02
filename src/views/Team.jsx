import person1 from '../img/iria.jpg';
import person2 from '../img/nia.jpg';
import person3 from '../img/rob.jpg';
import person4 from '../img/rak.jpg';

import '../styles/Team.css';

export const Team = () => {
    return (
        <div className="teamContainer">
            <div className="person">
                <img src={person1} alt="person1" className="person1Img"/>
                <p>Iria Sanz <br/> CTO</p>
            </div>
            <div className="person">
                <img src={person2} alt="person2" className="person2Img"/>
                <p>Estefanía Ferrer  <br/> Diseño 3D</p>
            </div>
            <div className="person">
                <img src={person3} alt="person3" className="person3Img"/>
                <p>Roberto Gonzalez<br/> Diseño 3D</p>
            </div>
            <div className="person">
                <img src={person4} alt="person4" className="person4Img"/>
                <p>Raquel Moya <br/> Fullstack Developer</p>
            </div>
        </div>
    );
};