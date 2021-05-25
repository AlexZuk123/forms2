import React from "react";
import './App.css';

function Form() {
  const handleSubmit=event=>{
    event.preventDefault();
    let userNick=document.getElementById("userNick");
    let userEmail=document.getElementById("userEmail");
    let userSex=document.getElementById("userSex");
    let userAge=document.getElementById("userAge");
    
    if(userAge.value>=18){
      alert(userNick.value +" " + userEmail.value + userSex.value + userAge.value);
    }else
    alert("AgeError");
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" id="userNick" placeholder="Nick-Name" required="required"/>
      <br/>
      <input type="text" id="userEmail" placeholder="@gmail.com" required="required"/>
      <br/>
      <select id="userSex" required="required">
        <option value="">Sex</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
      <br/>
      <input type="text" id="userAge" placeholder="Age" required="required"/>
      <br/>
      <input type="submit" value="Register"/>
    </form>
  );
}

var musicGroups=[
  {name: "The Beatles", information: "Британская рок-группа из Ливерпуля. Самая знаменитая группа мира, которая была основана в 1960 г."},
  {name: "AC/DC", information: "Австралийская рок-группа из Сиднея (1973 год)."},
  {name: "Rammstein", information: "Немецкая метал-группа, образованная в январе 1994 года в Берлине."}
];

function MusicGroup(props){
  return(
    <>
    <div>
      {props.name} {props.information}
    </div>
    <hr/>
    </>
  );
}

function MusicGroupsList(props){
  return(
    <div>
      {props.data.map(item=>(
        <MusicGroup{...item}/>
      ))}
    </div>
  );
}

export default function App(){
  return(
    <>
    <MusicGroupsList data={musicGroups}/>
    </>
  );
}
