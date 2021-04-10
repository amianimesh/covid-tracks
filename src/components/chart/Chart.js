import axios from 'axios';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends Component {

    /*componentDidMount(){
        axios.get("http://localhost:8080/cases")
        .then((response) =>{
            console.log(response);
        })
    }*/
    render(){
        return(
            <div className='container'>
                <Bar
                    data={{
                        labels: ['1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7'],
                        datasets: [{
                            label: 'Passed Away',
                            data: [10,16,16,17,14,18,14,17,18,16,17,14,18,14,17,12,13],
                            backgroundColor:['#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f',
                                            '#c9203f']
                        }, {
                            label: 'Recovered',
                            data: [90,76,66,57,64,78,44,77,58,66,57,74,58,64,57,62,63],
                            backgroundColor:['#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d',
                                            '#11694d']
                        }, {
                            label: 'Active',
                            data: [200,150,210,130,140,150,160,170,180,190,130,140,150,160,170,180,123],
                            backgroundColor:['#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf',
                                            '#00c1cf']
                        },{
                            label: 'Others',
                            data: [10,16,16,17,14,18,170,17,18,16,17,14,18,14,17,12,13],
                            backgroundColor:['#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58','#ffee58']
                        }] 
                    }}
                    weidth={800}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display:true,
                            text: 'Toll Summary',
                            fontColor: 'blue',
                            fontSize: 15
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels:{
                                fontColor:'#000'
                            }
                        },
                        scales:{
                            xAxes: [{
                                barPercentage: 0.5,
                                stacked: true
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    fontStyle: 'bold',
                                    labelString: 'Covid Cases Tracker',
                                    fontColor:'#000',
                                    stacked: true
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default BarChart;