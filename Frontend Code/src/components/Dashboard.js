import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Dashboard = () => {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('/api/traffic/analytics');
        setTrafficData(response.data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h1>Traffic Dashboard</h1>
      <ul>
        {trafficData.map((data, index) => (
          <li key={index}>
            {data.source} - {data.medium} ({data.userType})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
