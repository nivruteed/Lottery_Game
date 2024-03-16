import { useState } from "react"

export default function LudoBord() {
    let [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });

    let updateBlue = () =>{
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((preMove)=>{
           return {...moves, blue:moves.blue+1}
        })
    }

    let updateYellow = () =>{
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((preMove)=>{
           return {...moves, yellow:moves.yellow+1}
        })
    }
    return (
        <div>
            <p> Lodo Game</p>
            <div className="bord">
                <p >Blue Moves ={moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p >Yellow Moves ={moves.yellow} </p>
                <button style={{ backgroundColor: "yellow" , color:"black" }}onClick={updateYellow}>+1</button>
                <p >Green Moves ={moves.green} </p>
                <button style={{ backgroundColor: "green" }}>+1</button>
                <p >Red Moves ={moves.red} </p>
                <button style={{ backgroundColor: "red" }}>+1</button>
            </div>

        </div>
    )
}