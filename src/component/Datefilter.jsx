import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

export const Datefilter = () => {

  const handleSelect = (date)=>{
    console.log(date); 
  }

  return (
    <div>
      <h1>
        Datefilter
      </h1>
      <Calendar
        date={new Date()}
        onChange={handleSelect}
      />
    </div>
  )
}
