import { useEffect, useState } from 'react'
import LandingSection from './Components/LandingSection/LandingSection.jsx'
import InterViewSection from './Components/InterViewSection/InterViewSection.jsx'
import StatsSection from './Components/StatsSection/StatsSection.jsx';


function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [questionNo, setQuestionNo] = useState(1);
  const [question, setQuestion] = useState('');
  const [ans, setAnswer] = useState('');
  const [sessionData, setSessionData] = useState([]);
  const [progressBar, setProgressBar] = useState(20);
  const [feedback, setFeedBack] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [isRetry, setIsRetry] = useState(false)
  const [stat, setStat] = useState(false)
  const [totalQue, setTotalQue] = useState(1);
  
  function onTrackSelect(track){
    let currentTrack = track;
    setCurrentTrack(track);
  }

  function screen(){
    if(currentScreen==='landing'){
    location.reload();
  }
  }
  

  
  return ( 
    
    <>
    {currentScreen==='landing' && <LandingSection 
      setCurrentScreen={setCurrentScreen}
      onTrackSelect={onTrackSelect}
      currentTrack={currentTrack}/>}

    {currentScreen==='interview' && <InterViewSection
      currentTrack={currentTrack}
      setQuestionNo={setQuestionNo}
      setQuestion={setQuestion}
      ans={ans}
      setIsLoading={setIsLoading}
      setFeedback={setFeedBack}
      sessionData={sessionData}
      progressBar={20}
      currentScreen={currentScreen}
      question={question}
      setAnswer={setAnswer}
      feedback={feedback}
      isLoading={isLoading}
      setSessionData={setSessionData}
      questionNo={questionNo}
      isRetry={isRetry}
      setIsRetry={setIsRetry}
      setStat={setStat}
      stat={stat}
      setCurrentScreen={setCurrentScreen}
      totalQue={totalQue}
      setTotalQue={setTotalQue}
    />}
    {currentScreen==='stats' && <StatsSection
      totalQue={totalQue}
      currentTrack={currentTrack}
      progressBar={progressBar}
      sessionData={sessionData}
      currentScreen={currentScreen}
      setCurrentScreen={screen}
    />}


  
    
    </>
  )
}

export default App
