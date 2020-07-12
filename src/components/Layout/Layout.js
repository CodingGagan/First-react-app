import React from 'react';
import classes from './Layout.css';
import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => {
    return <Auxiliary>
        <div className={classes.Content}>Toolbars, SideDrawer, Backdrop</div>
        <main>{props.children}</main>
    </Auxiliary>
};

export default layout;