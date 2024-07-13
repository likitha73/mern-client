import {useState} form 'react'
export default function Home(){
    const [name, setName] = useState("");
    const [ShowName2, SetShowName] = useState("");
    const handleChange =(e)=>{setName(e.target.value);}
    const handleButton=()=>{
        SetShowName(Welcome,${setName});
    }
    return(
        <div>
            <input type= "text" placeholder = "Enter Name" value={name} onChange={handleChange}/>
            <button className="bg-blue border border-1 w-10" 
            onClick={handleButton}>Submit</button>
            <p>{ShowName}</p>
        </div>
    )
}