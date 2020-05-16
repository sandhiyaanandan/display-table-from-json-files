import React from 'react';
import spanishData from './lang/spanish.json';
import latinData from './lang/latin.json';
import russianData from './lang/russian.json';
import frenchData from './lang/french.json';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './readJsonFile.css';

function ReadJsonFile()
{
	let data = [];
	let langList = [{lang:"Spanish", data:spanishData},{lang:"Latin", data:latinData},{lang:"French", data:frenchData},{lang:"Russian", data:russianData}];
	const columns= [{
      dataField: 's_no',
      text: 'S.No',
      style: { backgroundColor: 'blue', color: 'white' },
      headerStyle: { backgroundColor: 'green', color: 'white', borderLeft:'1px solid green'}
    },
    {
      dataField: 'name',
      text: ' Customer Name',
      style: { backgroundColor: 'blue', color: 'white' },
      headerStyle: { backgroundColor: 'green', color: 'white'}
    }, {
      dataField: 'mailid',
      text: 'Email-Id',
      style: { backgroundColor: 'blue', color: 'white' },
      headerStyle: { backgroundColor: 'green', color: 'white'}
    },
     {
      dataField: 'place',
      text: 'Place',
      style: { backgroundColor: 'blue', color: 'white' },
      headerStyle: { backgroundColor: 'green', color: 'white'}
    },
     {
      dataField: 'query',
      text: 'Query',
      style: { backgroundColor: 'blue', color: 'white' },
      headerStyle: { backgroundColor: 'green', color: 'white'}
    }
    ];
    for( let i =0; i<langList.length; i++)
    {
    	data.push(<p className="langText">{langList[i].lang}</p>);
	  	data.push(<div className="tableText">
        <BootstrapTable 
		    	keyField="s_no"
		    	data={langList[i].data}
		    	striped 
			    hover 
			    pagination={paginationFactory()}
			    columns={ columns } 
         dataAlign="center"/></div>);
    }
	return(<div>
			{data}
		</div>)
	}

export default ReadJsonFile;