import { useReducer } from "react"



let initialState = {
    viewersCount:0
}

function reducer(state, action){
    switch(action.type)
    {
        case "Join":
        return {viewersCount: state.viewersCount + 1}
        case "exit":
        return {viewersCount: state.viewersCount - 1}
    }
}


export function ReducerDemo(){


    const [state, dispatch] = useReducer(reducer, initialState);

    function handleJoinClick(){
        dispatch({type: 'Join'});
    }

    function handleExitClick(){
        dispatch({type: 'exit'});
    }
    return(
        <div className="container-fluid">
            <h2>Watch Live</h2>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/4gulVzzh82g" ></iframe>
            <div className="mt-4">
                <div className="bi bi-eye">[{state.viewersCount}] Viewing </div>
            </div>
            <div className="mt-4 row">
                <div className="col">
                    <h3>User 1</h3>
                    <button onClick={handleJoinClick} className="bi bi-camera-video btn btn-primary"> Join</button>
                    <button onClick={handleExitClick} className="bi bi-door-open btn btn-danger ms-2"> Exit</button>
                </div>
                <div className="col">
                    <h3>User 2</h3>
                    <button onClick={handleJoinClick} className="bi bi-camera-video btn btn-primary"> Join</button>
                    <button onClick={handleExitClick} className="bi bi-door-open btn btn-danger ms-2"> Exit</button>
                </div>
            </div>
        </div>
    )
}