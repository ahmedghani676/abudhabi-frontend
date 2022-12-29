import React  from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import {Pie} from 'react-chartjs-2';
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
      
      const labels = ['American', 'English', 'Ministry of education','Indian','Sabissystem','other'];
     // const der = ['47110','51360','56999','63,077','73,502','76,430','84,220','84603','92,456'];
     const data = {
        labels,
     //   der,
         datasets: [
         
           {
             label: 'Dataset 2',
             // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
             data:'[55,48,43,27,5]',
             borderColor: 'rgb(53, 162, 235)',
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
           },

         ],
      };
		
		return (
		<div style={{"width":"50vw"}}>
            <div className='row'>
                <div className='col-md-4'>
                <Pie options={options} data={data} />;
                </div>
            </div>
             
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
export default Sect;