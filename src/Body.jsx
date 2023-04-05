import { useEffect, useState } from "react";
import "./Body.css";
import SearchIcon from '@mui/icons-material/Search';


const Body=()=>{


    const[inp,setInp]=useState("");
    const[lat,setLat]=useState("");
    const[lon,setLon]=useState("");
    const[tem,setTem]=useState();
    const[img1,setImg]=useState("");

    useEffect(()=>{
        const fetchA=async()=>{
            const res= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inp}&limit=5&appid=0ed9fe0d175aa1a46a1f6304f7c4c396`);
            const res2= await res.json();
              setLat(res2[0].lat);
              setLon(res2[0].lon);
            console.log(inp);
              
            }
        fetchA();
       
    },[inp])
    
        
    
 

    const inChange=(event)=>{
           const value = event.target.value;
            setInp(value);
    }
    const searc= ()=>{
        const fetchB=async()=>{
        const res3 = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ed9fe0d175aa1a46a1f6304f7c4c396`);
        const res4 = await res3.json();
        console.log(res4);
        const res5 = (res4.main.temp-272.15).toFixed(2)
        setTem(res5+"°C");
        if(res4.weather[0].main==="Clear"){
            setImg("./sun1.jpg");
        }
        else if(res4.weather[0].main==="Clouds"){
            setImg("./wf.jpg");
        }
        else {
            setImg("./cs.jpg")
        }
    }
    fetchB();
    
        
            
    
    }

    return(<div className="body1">
        
        <input autoComplete="off" type="text" onChange={inChange} value={inp} placeholder="Enter CityName" ></input><SearchIcon style={{position:"absolute",top:"75px",left:"295px"}} onClick={searc}></SearchIcon>
        <div className="are"><img src={img1} alt="" className="img2"></img></div>
        <div className="are"><h1 className="temp1">{inp}</h1></div>
        <div className="are"><h1 className="temp">{tem}</h1></div>
        <div className="are"><p className="temp" id="tem2">Min : {tem} | Max:{tem}</p></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
    </div>)
}

export default Body;
