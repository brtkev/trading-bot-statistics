import React, {Component} from 'react';

import styles from './Topbar.module.css';

import Label from './Label/Label';

class TopBar extends Component {


    render(){

        return(
            <div className={styles.mainContainer}>
                <Label />
            </div>
        ) 
    }
}

export default TopBar;