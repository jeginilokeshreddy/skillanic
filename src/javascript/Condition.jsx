import React ,{useState} from 'react'

export default function Condition() {
   const [subjectMark ,setSubjectMark]=useState()
    setTimeout(()=>{
        console.log(subjectMark)
    },2000)
    const checkGrade=(subjectMark)=>{
        debugger
       if(typeof subjectMark === "number" &&subjectMark!=null&& subjectMark!=undefined ){
        //if(subjectMark<=35)  we write this constion when the block need to be true what are we are seeing that ing onluy will wor for trcuce constion always we write form truc cinstion
        // min<max
        // it will check range from mix to max shar will say min and open will say max
        if(subjectMark<=35) {
            alert("sorry you are fail try next time")
        }
        else if(subjectMark<=35){
            alert("you are just pass")
        }
        else if(subjectMark<=50){
            alert("you got 3rd calss marks")
        }
        else if(subjectMark<=60){
            alert("you got 3rd calss marks")
        }
        else if(subjectMark<=70){
            alert("you got 2nd calss marks")
        }
        else if(subjectMark<=100){
            alert("you got 1st calss marks")
        }
       }
    else{
        alert("give proper number")
    }
    }
  return (
    <div className='contraol-statements'>
      <form>
        <label htmlFor='subjectMark'>Enter marks and check the grade</label>
        <input id="subjectMark" type="number" name="subjectMark" value={subjectMark} onChange={(e)=>{
           setSubjectMark(+e.target.value)
        }}/>
        <button onClick={()=>{
            checkGrade(subjectMark)
        }}>click to find your grade</button>
      </form>
    </div>
  )
}
