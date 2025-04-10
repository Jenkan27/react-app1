import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

const spotPriceData = [
    { hour: '00:00', price: 45.3 },
    { hour: '01:00', price: 44.8 },
    { hour: '02:00', price: 43.2 },
    { hour: '03:00', price: 42.1 },
    { hour: '04:00', price: 41.5 },
    { hour: '05:00', price: -42.3 },
    { hour: '06:00', price: 46.7 },
    { hour: '07:00', price: 52.4 },
    { hour: '08:00', price: -58.9 },
    { hour: '09:00', price: -60.1 },
    { hour: '10:00', price: -59.2 },
    { hour: '11:00', price: -57.0 },
    { hour: '12:00', price: 55.4 },
    { hour: '13:00', price: 54.1 },
    { hour: '14:00', price: 53.8 },
    { hour: '15:00', price: -52.5 },
    { hour: '16:00', price: -50.3 },
    { hour: '17:00', price: -48.2 },
    { hour: '18:00', price: 49.9 },
    { hour: '19:00', price: 51.2 },
    { hour: '20:00', price: 53.6 },
    { hour: '21:00', price: 55.1 },
    { hour: '22:00', price: 52.9 },
    { hour: '23:00', price: 50.4 },
  ];


  
  const SpotPriceChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={spotPriceData}
            layout="vertical"
            //margin={{ top: 20, right: 30, bottom: 20, left: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" unit=" €" />
            <YAxis dataKey="hour" type="category" width={60} />
            <Tooltip />
            <Bar dataKey="price" fill="rgb(104, 214, 163)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      );
  };
  
  export default SpotPriceChart;