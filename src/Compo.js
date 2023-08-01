import React from "react";




let data = {
    Name:"Ram",
    theme:{
        backgroundColor: "black",
        color : "Red",
    },

    course : "Btech",

}

     




export default function Detail(){
    return <div style={data.theme}> 
    <h1> {data.Name} </h1>
    <p>{data.course}</p>
    <img src=""/>

    </div>
    
}