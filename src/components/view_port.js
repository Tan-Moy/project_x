import React from 'react';

class ViewPort extends React.Component{
    render(){
        return(
            <div className="row">
                <div className='col-xs-8'>
                    <div className="jumbotron background-semi_transpaprent">
                        <p>You stand on the edge of a peaceful forest, overlooking a small clearing.  The day star, Deadalus, gently sheds its light through the trees, while the smaller evening star, Icarus, chases it endlessly across the early morning sky.  Your fingertips buzz and sizzle with energy, and it takes a considerable amount of concentration to contain the magical sparks that threaten to issue forth from your fingers.  Somewhere nearby, a crow begins to cackle, as if mocking your utter lack of control over your supposed “gift”.<br/>Your uncle Alphonse, having claimed he can help you gain command of this “gift,” sits on a stump off in the distance, awaiting your approach.  Hopefully, this isn’t another of his ridiculous japes.
                        </p>
                        <div className="row">
                            <button className="btn btn-primary pull-right">Next</button>
                            <button className="btn btn-success pull-left">Previous</button>
                        </div>
                    </div>
                </div>
                <div className='col-xs-4'>
                    <div className="jumbotron background-semi_transpaprent">

                    </div>
                </div>
            </div>

        )
    }
}

export default ViewPort;