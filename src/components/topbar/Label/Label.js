import React, {Component} from 'react';

import styles from './Label.module.css';

const qtyStyle = (qty) =>{
    const style = [styles.text];
    if(qty > 0){
        style.push(styles.textGreen);
    }else if(qty < 0){
        style.push(styles.textRed);
    }
    return style.join(' ');
};

class Label extends Component {


    render(){

        const pnlQty = 0;

        

        return(
            <div className={styles.mainContainer}>
                <p className={styles.text} > 7d Profit & Loss</p>
                <p className={qtyStyle(pnlQty)}>${pnlQty}</p> 
            </div>
        ) 
    }
}

export default Label;