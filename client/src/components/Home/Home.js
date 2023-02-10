import React from 'react'
import HeroLogo from '../../images/Logo1.png';
import HeroImg from '../../images/human.png';
import { Container } from "react-bootstrap";
import './Home.css';
function Home() {
    return (
        <>
            <Container fluid className="bgImage">
                <div className="parent">
                    <div>
                        {/* <PitchIdea /> */} I am PitchIdea
                    </div>
                    <div className="image-parent">
                        <img src={HeroLogo} alt="HeroLogo" className="logo2"></img>
                        <img src={HeroImg} alt="HeroImg" className="cartoon"></img>
                        <div>
                            {/* {pitchs.length == 0 && <DefaultBox></DefaultBox>}
              {pitchList()} */}
                            pitchList
                        </div>
                    </div>
                    <div></div>
                </div>
            </Container>
        </>
    )
}

export default Home
