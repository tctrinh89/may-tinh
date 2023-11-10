import {useState,useRef} from 'react'
import Time from './Time'
import Button from './Button'
// import Input from './Question'

function App() {
  // const [answer,setAnswer]=useState('')
  const [inputAnswer,setInputAnswer]=useState('')

  const [time,setTime]=useState(10)
  const times =useRef()

  // const beginTime = ()=>{
  //   setQuestion('')
  //   times.current=setInterval(()=>{setTime(time=>time-1)}
  //   ,1000)
  // }
  
  const handleClick=(e)=>{
    if(e.target.value === 'x'){
      setInputAnswer('')
    } else if(e.target.value ==='enter'){
                questions()
                clearInterval(times.current)
                setTime(20)
            // setTimeout(beginTime,20000)
                setInputAnswer('')
                console.log(inputAnswer)
                if(eval(question)===Number(inputAnswer)){
                setCount(count+1)
                console.log(count)
                } else {
                  alert(` bạn được :${count} diem`)
                  setCount(0)
                  } }
                 else {
      setInputAnswer(inputAnswer + e.target.value)
    }
}
  const [question,setQuestion]=useState('')
  const questions=()=>{
    const phepTinh= ['+','-']
    const so1=Math.floor(Math.random()*100)
    const so2=Math.floor(Math.random()*100)
    const so=[so1,so2]
    so.sort((a,b) => b-a)
    const random= phepTinh[Math.floor(Math.random()*phepTinh.length)]
    const ketqua =`${so[0]} ${random} ${so[1]}`
  console.log(eval(ketqua))
  return setQuestion(ketqua)
}
const [count,setCount]=useState(0)

// const tinhDiem=()=>{
//   if(eval(question)===Number(inputAnswer)){
//     setCount(count+1)
//   }
//   alert(` bạn được :${count} diem`)
// }




  return (
    <div className="App">
      
      <Time time={time}/>
      
      <div className='input'>
        <input value={question} readOnly />
        <input value={inputAnswer} readOnly/>
      </div>
      <div className='buttons'>
        <Button value='1' handleClick={handleClick} />
        <Button value='2' handleClick={handleClick} />
        <Button value='3' handleClick={handleClick} />
        <Button value='4' handleClick={handleClick} />
        <Button value='5' handleClick={handleClick} />
        <Button value='6' handleClick={handleClick} />
        <Button value='7' handleClick={handleClick} />
        <Button value='8' handleClick={handleClick} />
        <Button value='9' handleClick={handleClick} />
        <Button value='x' handleClick={handleClick} />
        <Button value='0' handleClick={handleClick} />
        <Button value='enter' handleClick={handleClick} />
      </div>
      
        {/* <button onClick={beginTime}></button> */}
    </div>
  );
}

export default App;
