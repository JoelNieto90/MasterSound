import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentsStyles/SideLinks.scss';

const PlaybarControl = ({ path, icon, classname, event }) => {
    return (
        <Fragment>
            <Link to={path} className={classname} onClick={event}>
                {icon}
            </Link>
        </Fragment>
    );
}
 
export default PlaybarControl;