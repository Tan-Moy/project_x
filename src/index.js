import React from 'react';
import ReactDOM from 'react-dom';
import StatusBar from './components/status_bar';
import ViewPort from './components/view_port';

//Create a new component
const App = () => {
    return (
        <div className="container-fluid">
            <StatusBar/>
            <ViewPort/>
        </div>
    )
}






//Render to DOM
ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);