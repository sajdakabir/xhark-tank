import React, { useEffect, useState } from 'react'
import HeroLogo from '../../images/Logo1.png';
import HeroImg from '../../images/human.png';
import { Container } from "react-bootstrap";
import './Home.css';
import PitchFrom from '../PitchFrom/PitchFrom';
import DefaultBox from "../Pitchs/DefaultBox";
import Pithcs from "../Pitchs/Pitchs.js";
function Home() {
    const [pitchs,setPitchs]=useState([]);

    useEffect(()=>{
        async function getPitches (){
            const response= await fetch("http://localhost:8081/pitches");

            if(!response.ok){
                const message=`An error occurred : ${response.statusText}`;
                window.alert(message);
                return;
            }
            const pitchs=await response.json();
            console.log(pitchs);
            setPitchs(pitchs);
        }
        getPitches();
        return;
    },[pitchs.length]);

    const pitchList=()=>{
        return pitchs.map((pitch)=>{
            <div className='pitch'>
                <Pithcs pitch={pitch}></Pithcs>
            </div>
        });
    };

    return (
        <>
            <Container fluid className="bgImage">
                <div className="parent">
                    <div>
                        <PitchFrom />
                    </div>
                    <div className="image-parent">
                        <img src={HeroLogo} alt="HeroLogo" className="logo2"></img>
                        <img src={HeroImg} alt="HeroImg" className="cartoon"></img>
                        <div>
                            {/* {pitchs.length == 0 && <DefaultBox></DefaultBox>}
              {pitchList()} */}

                            {/* <DefaultBox/> */}
                            {pitchList()}
                        </div>
                    </div>
                    <div></div>
                </div>
            </Container>
        </>
    )
}

export default Home
