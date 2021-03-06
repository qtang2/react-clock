import React, { Component } from 'react';
import './App.css';
import LengthControl from './components/LengthControl';
import Session from './components/Session';
import TimerControl from './components/TimerControl';


const audio = document.getElementById("beep")
class  App extends Component {
  constructor(props){
    super(props)
    this.timerInterval= undefined
    this.state={
      breakLength: 5,
      sessionLength:25,
      clockCount: 25*60,
      currentTimer: "Session",
      intervalIsPlaying: false
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerInterval)
  }

  startStop = ()=>{
    const {intervalIsPlaying} = this.state
    console.log("start stop")

    if(intervalIsPlaying){
      clearInterval(this.timerInterval)
      this.setState({intervalIsPlaying:false})
    }
    else{
      this.setState({intervalIsPlaying:true})
      this.timerInterval = setInterval(() => {
        const {clockCount,breakLength,currentTimer,sessionLength} = this.state
        if(clockCount===0){
          console.log("beeeeeeeeep")
          if(currentTimer==="Session"){
            audio.play()
            this.setState({
              currentTimer: "Break",
              clockCount: breakLength*60,
            })
          }else if(currentTimer==="Break"){
            this.setState({
              currentTimer: "Session",
              clockCount: sessionLength*60,
            })
          }
        }else{
          this.setState({clockCount:clockCount-1})
        }
        
      }, 1000);
    }
    

  }

  clockify = (count) =>{
    let munites = Math.floor(count/60)
    let seconds = count%60
    return (munites<10?'0'+munites:munites)+":" + (seconds<10 ? '0'+seconds: seconds)
  }


  increaseBreak = () =>{
    console.log("break inc")
    
    if(this.state.intervalIsPlaying){
      return
    }
    else{
      let {breakLength} = this.state
      if(breakLength===60){
        console.log("break limit meet")
        return
      }else this.setState({breakLength: breakLength+1})
    }
    
  }

  increaseSession = () =>{
    console.log("session inc")
    if(this.state.intervalIsPlaying){
      return
    }else{
      let {sessionLength} = this.state
      if(sessionLength===60){
        console.log("session limit meet")
        return
    } else this.setState({sessionLength: sessionLength+1,clockCount:(sessionLength+1)*60})
    }
    
  }

  decreaseBreak = () =>{
    console.log("break dec")
    if(this.state.intervalIsPlaying){
      return
    }else{
      let {breakLength} = this.state
      if(breakLength===1){
        console.log("break cannot less than 1")
        return
      }
      this.setState({breakLength: breakLength-1})
      }
    
  }

  decreaseSession = () =>{
    console.log("session dec")
    if(this.state.intervalIsPlaying){
      return
    }else{
      let {sessionLength} = this.state
      if(sessionLength===1){
        console.log("session cannot less than 0")
        return
      }
      this.setState({sessionLength: sessionLength-1,clockCount:(sessionLength-1)*60})
      }
    
  }



  reset = ()=>{
    console.log("reset")
    this.setState({
      breakLength: 5,
      sessionLength:25,
      clockCount:25*60,
      currentTimer: "Session",
      intervalIsPlaying: false
    })

    clearInterval(this.timerInterval)
    audio.pause();
    audio.currentTime=0
  }


  render(){
    let {
      breakLength,
      sessionLength,
      clockCount,
      currentTimer,
      intervalIsPlaying} = this.state
    return (
      <div className="App">
        <h3>Welcome to the <span>Pomodoro Clock</span></h3>
        
        <div className="length-control-container">
          <LengthControl
            type = "break" 
            name="Break Length"
            length = {breakLength}
            increase = {this.increaseBreak}
            decrease = {this.decreaseBreak}
            />
          <LengthControl 
            type = "session" 
            name="Session Length"
            length = {sessionLength}
            increase = {this.increaseSession}
            decrease = {this.decreaseSession}
          />
        </div>
        <div className="timer-container">
          <Session clockCount={this.clockify(clockCount)} currentTimer={currentTimer}/>
          <TimerControl startStop={this.startStop} reset={this.reset} intervalIsPlaying={intervalIsPlaying}/>
        </div>
        <label id="copyright"> © Qian Tang 2020</label>
      </div>
    );
  }
  
}

export default App;
