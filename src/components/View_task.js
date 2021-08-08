import axios from 'axios';
import React,{useEffect} from 'react'
import { useState } from 'react';

function View_task() {
	const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/tasks',
			headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then(({data}) => {
      setData(data);
    })
  }, []);

	return (
		<div>
			{console.log(data)}
		</div>
	)
}

export default View_task
