import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import styles from './HomePage.module.css';

const BarColor = (data) => {

    const backgroundColors = [];
    const borderColors = [];

    data.map( ( number, index) => {

        if( number > 0){
            backgroundColors.push('rgba(54, 162, 235, 0.2)');
            borderColors.push('rgba(54, 162, 235, 1)');
        }else{
            backgroundColors.push('rgba(255, 99, 132, 0.2)');
            borderColors.push('rgba(255, 99, 132, 1)');
        }
        return(true);
    });

    return [backgroundColors, borderColors];

}

const profitnloss = ( data) => {
    let profit = 0, loss = 0;
    
    data.forEach(value => {
            if(value > 0){
                profit += value;
            }else{
                loss += value;
            }
            return(true);
    });

    return [ profit, loss];
    // return { profit : profit, loss : loss};

}

class HomePage extends Component {

    render(){

        const data = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: '7d Profit & Loss',
                data: [12, 19, -3, -5, 2, 3, -2],
                // backgroundColor: [
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)'
                // ],
                // borderColor: [
                //     'rgba(255, 99, 132, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)'
                // ],
                borderWidth: 1
            }]
        };



        const dataPie = {
            labels : ['profit', 'loss'],
            datasets: [{
                label : 'profit & loss',
                data : profitnloss(data.datasets[0].data),
                backgroundColor : [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        }
        
        const colors = BarColor(data.datasets[0].data)
        data.datasets[0].backgroundColor = colors[0];
        data.datasets[0].borderColor = colors[1];


        return(
            <div className={styles.mainContainer}>
                {/* <canvas id="myChart"></canvas> */}
                {/* < myChart /> */}
                <Bar
                    data={data}
                    // width={100}
                    // height={50}
                    options={{ maintainAspectRatio: false }}
                />
                <Pie data={dataPie} options={{ maintainAspectRatio: false }} />
            </div>
        ) 
    }
}

export default HomePage;