import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AnswerTable = (props) => {

    const [answers, setAnswers] =useState([]);
    const {refresh, setRefresh} = props;


    useEffect(() => {
        axios.get('/api/answers')
        .then(res => {
            setAnswers(res.data.answers);
        })
    },[refresh]
    );



    return(
        <div className=" table6 my-2">
            <table className="table table1 table-light">
                <thead>
                    <tr>
                        <th>Question 1</th>
                        <th>Question 2</th>
                    </tr>
                </thead>
                <tbody>
                    {answers.map((answer, idx) =>
                    <tr key={idx}>
                        <td>{answer.question1}</td>
                        <td>{answer.question2}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default AnswerTable;