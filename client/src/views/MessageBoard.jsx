import React, {useState}  from "react";
import '../css/style.css';

import NavBar from "../components/NavBar";
import BoardForm from "../components/BoardForm";
import AnswerTable from "../components/AnswerTable";


const MessageBoard = () => {

    const [refresh, setRefresh] = useState(false);



    return(
        <div className="container2 mt-3">
            <div className='navBar textAlign'>
                <NavBar />
            </div>
            <div>
                <BoardForm refresh={refresh} setRefresh={setRefresh}/>
            </div>
            <div>
                <AnswerTable refresh={refresh} setRefresh={setRefresh}/>
            </div>
        </div>



    )




}
export default MessageBoard;