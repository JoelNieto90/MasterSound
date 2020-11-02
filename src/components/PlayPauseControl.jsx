import React, { Fragment } from 'react';
import '../styles/componentsStyles/SideLinks.scss';

const PlaypauseControl = ({ icon, classname, event }) => {
    return (
        <Fragment>
            <button className={classname} onClick={event}>
                <div className="round__container">
                    <div className="round__element">
                        {icon}
                    </div>
                </div>
            </button>
        </Fragment>
    );
}
 
export default PlaypauseControl;