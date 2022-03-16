import React from "react";

export function Home({name, age}) {
    return(
        <div>
            <h1>Hello {name}, my age is {age}</h1>
        </div>
    )
}

export function PropsHome(props){
    return(
        <div>
            <h1>Hello {props.name}, my age is {props.age}  </h1>
            {props.children}
        </div>
    )
}