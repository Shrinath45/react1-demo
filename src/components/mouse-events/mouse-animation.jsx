import { useState } from "react";
import './mouse-animation.css';

export function MouseAnimation(){
    const [initialState, setInitialState] = useState({aniamationName:'Spin', animationDuration:'4s', animationIterationCount: 'infinite', animationTimingFunction: 'linear'});

    function handleMouseOver(){
        setInitialState({
            animationName: 'Spin',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        })
    }

    function handleMouseOut(){
        setInitialState({
            animationName: 'Spin',
            animationDuration: '4s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        })
    }

    function handleMouseDown(){
        setInitialState({
            animationName: 'Zoom',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
        })
    }

    return(
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img src="logo192.png" onMouseDown={handleMouseDown} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} style={initialState} alt="" />
        </div>
    )
}