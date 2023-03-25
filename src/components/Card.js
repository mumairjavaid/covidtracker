import React,{useEffect, useState} from 'react'
import Footer from './Footer'




const Card = () => {
    const [first, setFirst] = useState("")
    console.log(first);
    const covidInfo=async ()=>{
        try {
            let response= await fetch('https://data.covid19india.org/data.json');
            let data= await response.json();
            // const [NewConfirmed]=data.Global;
            // const [Country]=data.Global.Countries[0];
            // const covidInfo={NewConfirmed}
            setFirst(data.cases_time_series[200]);
        } catch (error) {
            console.log('Error'); 
        }
        

    }
    useEffect(() => {
      covidInfo();
    }, [])
    
  return (
    <>
    <h1 style={{textAlign:'center',textDecoration:'underline',marginTop:'35px'}}>Live Covid Tracker</h1>
    <div className="main-container">

    <div className="card">
        <h4 className='text'>Today's Confirmed</h4>
        <h4 className='text'>{first.dailyconfirmed}</h4>   
    </div>
    <div className="card">
        <h4 className='text'>Deceased Today</h4>
        <h4 className='text'>{first.dailydeceased}</h4>   
    </div>
    <div className="card">
        <h4 className='text'>Recovered Today</h4>
        <h4 className='text'>{first.dailyrecovered}</h4>   
    </div>  
    </div>
    <div className="main-container">
    <div className="card">
        <h4 className='text'>Last Updated</h4>
        <h4 className='text'>{first.date}</h4>   
    </div>
    <div className="card">
        <h4 className='text'>Today's Date</h4>
        <h4 className='text'>{first.dateymd}</h4>   
    </div>
    <div className="card">
        <h4 className='text'>Total Recovered</h4>
        <h4 className='text'>{first.totalrecovered}</h4> 
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Card