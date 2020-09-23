import React from 'react';
import './Choices.css';

function Choice(props: { name: string, onSelectChoice: (key:string) => void }) {
  return (
    <div className="wrapper">
      <input onChange={() => props.onSelectChoice(props.name)} className="state" type="radio" name="app" id={props.name} value={props.name} />
      <label className="label" htmlFor={props.name}>
        <div className="indicator"></div>
        <span className="text">{props.name}</span>
      </label>
    </div>
  ) 
}

function Choices(props: {choices: {[key: string]: string}, choiceState: string, onSelectChoice: (key:string) => void }){
  return (
    <div className="choicesWrapper">
      <div className="radiogroup">
        {
        Object.keys(props.choices).map(key => {
          return <Choice name={key} key={key} onSelectChoice={props.onSelectChoice}/>
        })
        }
      </div>
    </div>
  )
}

export default Choices;