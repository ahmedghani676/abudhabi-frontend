
import React  from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import {    Bar } from 'react-chartjs-2';
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
      
      const labels = ['2017/18', '2018/19', '2019/20'];
      const der = ['20','40','60','80','100','120','140','160','180','200'];
     const data = {
        labels,
        der,
         datasets: [
         
           {
             label: 'Dataset 2',
             // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
             data:[190,126,62],
             borderColor: 'rgb(53, 162, 235)',
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
           },

         ],
      };
		
		return (
		<div>
             <Bar options={options} data={data} />;
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
export default Sect;