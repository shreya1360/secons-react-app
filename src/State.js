// import {useState,useEffect, React} from  'react';
// function  State(){
//     const [count, setcounter] = useState(0);
//     const [data, setData]=useState("Ram");
//     useEffect( ()=>{
//         console.log("component mounted");
//     },[count])
//     function updateCount(){ 
//         setcounter(count+1);
//     }
//     function updateData(){
//         setData("Seeta")
//     }
//     return (
//         <>
//         <h1>Button clicked {count}</h1>
//         <h3>{data}</h3>
//         <button onClick={updateCount}>Click</button>
//         <button onClick={updateData}>Update Data</button>
//         </>
//     );
// }

import React from 'react';
import {useRef,useState} from 'react';
    export default State;

    function State(){
        const refElement = useRef("");
        const[name, setName]=useState("Yoshita")
        console.log(refElement)
        function Reset(){
            setName(" ")
            refElement.current.focus()
        }
        function handleInput(){
            refElement.current.style.color="blue"
            refElement.current.value="Shreya"
        }
        return(
            <>
            <h1>Learning useRef</h1>  
           <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleInput}>handle input</button>
            </>
        )
    }

