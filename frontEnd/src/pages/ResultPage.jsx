import React, { useLayoutEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ResultPage() {
  const { id } = useParams();
const [data,setData]=useState({})
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the server 
        const response = await axios.get(`http://localhost:3000/getReview/${id}`);
        setData(response.data.reviewData)
        
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, [id]); 

  console.log(data);
  return (
    <div className='flex justify-center'>
      Result page
    </div>
  );
}
