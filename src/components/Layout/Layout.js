import React from 'react';

import Aux1 from '../../hoc/Aux1';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux1>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux1>
);

export default layout;