import React, {useState} from 'react';
import axios from 'axios';



const BoardForm = (props) => {

    const [question1, setQuestion1] = useState();
    const [question2, setQuestion2] = useState();
    const [errors, setErrors] = useState([]); 
    const {refresh, setRefresh} = props;


    console.log(question1);

    const createMessage = (e) => {
        e.preventDefault();
        axios.post("/api/answers/new", {
            question1,
            question2
        })
        .then(res=>{
            console.log(res.data.answer);
            setQuestion1("");
            setQuestion2("");
            setRefresh(!refresh)
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })

    }



    return (
        <div className="marginAuto my-3">
            <form onSubmit={createMessage}>
                {errors.map((err, index) => <p key={index} className="error">{err}</p>)}
                <div className="input-group mb-3">
                    <label>What are some ideas for additional features or user stories that we might add to improve on our project for our portfolio?</label>
                    <textarea className="my-2" value={question1} onChange={(e)=> setQuestion1(e.target.value)} cols="90" rows="5"></textarea>
                </div>
                <div>
                    <label>How can we improve on our presentation and Q&A skills for when we need to talk to employers about this project?</label>
                    <textarea className="my-2" value={question2} onChange={(e)=> setQuestion2(e.target.value)} cols="90" rows="5"></textarea>
                </div>
                <button className="btn btn-sm  btn-outline-warning my-3">
                    Submit
                </button>
            </form>

        </div>

    )


}
export default BoardForm;