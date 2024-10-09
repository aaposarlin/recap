import { useState } from "react"

function CalcForm() {
const [firstNumber, setFirstNumber] = useState('');
const [secondNumber, setSecondNumber] = useState('');
const [result, setResult] = useState(null);
const calculate = () => {
    setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
}



        return (
            <><input type="number" value={firstNumber} onChange={(e)=>setFirstNumber(e.target.value)}></input>
            <p></p>
             <select>
            <option value="plus">+</option>
            </select>
            <p></p>
            <input type="number" value={secondNumber} onChange={(e)=>setSecondNumber(e.target.value)}></input>
            <p></p>
            <button onClick={calculate}>Calculate</button>
            <p>Sum of numbers {firstNumber} and {secondNumber} is {result}</p>
            </>
    
        )
    }

export default CalcForm