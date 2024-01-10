import React from "react";
import './form.css'
import CreateRoomForm from "./CreateRoomForm/createroomform";
import JoinRoomForm from "./JoinRoomForm/joinroomform";
const Forms=()=>{
    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mt-5 p-5 border-primary form-box border border-2 rounded-2 mx-auto d-flex flex-column align-items-center">
              <h1 className="text-primary fw-bold">Create room</h1>
              <CreateRoomForm/>
            </div>
           <div className="col-md-4 mt-5 p-5 border-primary form-box border border-2 rounded-2 mx-auto d-flex flex-column align-items-center">
             <h1 className="text-primary fw-bold">Join room</h1>
             <JoinRoomForm/>
           </div>
        </div>
    )
}

export default Forms