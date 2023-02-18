import React from 'react';
import "./Pitchs.css";


function Pitchs(props) {
    const offers = props.pitchs.offers;
    const pitchId = props.pitchId.id;
    return (
        <>
            <div>
                <h6>
                    {" "}
                    Entrepreneur : <span>{props.pitch.entrepreneur}</span>
                </h6>
            </div>
            <div>
                <h6>
                    {" "}
                    Pitch Title : <span>{props.pitch.pitchTitle}</span>
                </h6>
            </div>
            <div>
                <h6>
                    {" "}
                    Description : <span>{props.pitch.pitchIdea}</span>
                </h6>
            </div>
            <div>
                <h6>
                    {" "}
                    Asked Amount :<span>{props.pitch.askAmount}</span>{" "}
                </h6>
            </div>
            <div>
                <h6>
                    {" "}
                    Offered Equity :<span>{props.pitch.equity}</span>{" "}
                </h6>
            </div>
            <div>
                <h6 className="counter-button">
                    {/* Counter Offers{" "} */}
                    {/* <div>
                        <CounterOfferForm pitchId={pitchId} key={props.pitch.id} />
                        <ShowOffer offers={offers} key={props.pitch.id}></ShowOffer>
                    </div> */}
                </h6>
            </div>

        </>
    )
}

export default Pitchs;
