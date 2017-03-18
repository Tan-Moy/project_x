import React from 'react';

class StatusBar extends React.Component{
    render(){
        return(
            <div className='well well-sm background-semi_transpaprent'>
                <div className="row">
                    <div className='col-xs-4'>LifePoints:100</div>
                    <div className='col-xs-4'>ManaPoints:100</div>
                    <div className='col-xs-4'>Potions:100</div>
                </div>
            </div>
        )
    }
}

export default StatusBar;