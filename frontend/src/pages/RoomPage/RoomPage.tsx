import React, { useState } from "react";
import "./roompage.css"
import WhiteBoard from "../../components/Whiteboard/whiteboard";
const RoomPage=()=>{
    const [tool,setTool]=useState("pencil")
    const [color,setColor]=useState("black")
    return (
        <div className="row">
            <h1 className="text-center py-5">White Board Sharing App <span className="text-primary">[Users Online:0]</span></h1>  
            <div className="col-md-10 mx-auto gap-3 px-5 mt-4 mb-5 d-flex align-items-center justify-content-center">
                <div className="d-flex col-md-2 justify-content-center gap-1">
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="pencil">Pencil</label>
                        <input type="radio" id="pencil" name="tool"
                        checked={tool=='pencil'}className="mt-1"value="pencil" onChange={(e)=>{setTool(e.target.value)}}/>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="line">Line</label>
                        <input type="radio" 
                        checked={tool=='line'}id="line" name="tool" className="mt-1"
                    value="line" onChange={(e)=>{setTool(e.target.value)}}/>
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="rect">Rectangle</label>
                    <input type="radio" id="rect" name="tool" className="mt-1"
                    checked={tool=='rect'}
                    value="rect" onChange={(e)=>{setTool(e.target.value)}}/>
                    </div>
                </div>
                <div className="col-md-3 mx-auto">
                    <div className="d-flex align-items-center">
                        <label htmlFor="color">Select Color:</label>
                        <input type="color" 
                        value={color}id="color" className="mt-1 ms-3"
                        onChange={(e)=>setColor(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-3 d-flex gap-2">
                    <button className="btn btn-primary mt-1">Undo</button>
                    <button className="btn btn-outline-primary mt-1">Redo</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger">Clear Canvas</button>
                </div>
            </div>
            <div className="col-md-10 mx-auto mt-4 canvas-box">
            <WhiteBoard/>
            </div>        
        </div>
    )
}
export default RoomPage