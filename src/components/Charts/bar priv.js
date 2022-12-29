import React  from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {read} from 'xlsx';
ChartJS.register(...registerables);
 
function Sect() {
    fetch('studentrecord.xlsx').then(res => { 
        var workbook = read(new Uint8Array(res), {
            type: 'array'
        });
        console.log('99999992',workbook)
    }
    );
    // let fileName = "../studentrecord.xlsx";
    //      let workbook = read(fileName)
    //         console.log('89898989',workbook)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['2013/2014', '2014/2015', '2015/2016','2016/2017','2017/2018','2018/2019','2019/2020'];
      const der = ['0','50k','100k','150k','200k','253.444k'];
     const data = {
        labels,
     //   der,
         datasets: [
         
           {
             label: 'Dataset 2',
             // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
             data:'[214587,223803,236235,241488,242053,248753,253444]',
             borderColor: 'rgb(53, 162, 235)',
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
           },

         ],
      };
		
		return (
		<div style={{"width":"50vw"}}>
            <div className='row'>
                <div className='col-md-4'>
                <Bar options={options} data={data} />;
                </div>
            </div>
             
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
export default Sect;