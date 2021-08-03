import React,{useState} from "react";
import { Data } from "./Data";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Accordion = () => {

    const [questions,setQuestions] = useState(Data)

    const handleClick = (index) => {
        const lists = [...questions];
        const curQues = lists[index];
        console.log(curQues)
        curQues.checked = !curQues.checked;
        setQuestions(() => lists)
    }
    return (
    <div>
      {questions.map((item, index) => {
        return (
          <>
            <div  key={index}>
              <h3>{item.questions}</h3>
              <span onClick={() => handleClick(index)}>{item.checked  ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
            </div>
            {item.checked && <p>{item.answer}</p>}
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
