percentage = () =>{
    let math = document.getElementById('math');
    let sci = document.getElementById('sci');
    let marathi = document.getElementById('marathi');
    let eng = document.getElementById('eng');
    let hindi = document.getElementById('hindi');
    let result = document.getElementById('result');

    let percentage = (parseInt(math.value) + parseInt(sci.value) + parseInt(marathi.value) + parseInt(eng.value) + parseInt(hindi.value))/5 ;
    if(percentage>=35){
    result.innerText="Congratulations,You Got "+ percentage +"% in the 10th Standard..!"
    }  else{
        result.innerText="Sorry ,You Got "+ percentage +"% in the 10th Standard and You are failed..!"
        result.style.color="red";
  
    }
    math.value = "";
    sci.value="";
    marathi.value="";
    eng.value="";
    hindi.value="";
}

