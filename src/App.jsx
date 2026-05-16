import { useState } from 'react'
import LandingSection from './Components/LandingSection/LandingSection.jsx'
import InterViewSection from './Components/InterViewSection/InterViewSection.jsx'
import StatsSection from './Components/StatsSection/StatsSection.jsx';


function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [questionNo, setQuestionNo] = useState(1);
  const [que, setQuestion] = useState('');
  const [ans, setAnswer] = useState('');
  const [sessionData, setSessionData] = useState([]);
  const [progressBar, setProgressBar] = useState(20);
  const [feedback, setFeedBack] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('landing');

  function screen(screen){
    if(currentTrack!==null){
      let currentScreen='interview';
      setCurrentScreen('interview');
    }
  }
  function onTrackSelect(track){
    let currentTrack = track;
    setCurrentTrack(track);
  }
  
  return ( 
    
    <>
    {currentScreen==='landing' && <LandingSection 
      currentScreen={screen} 
      onTrackSelect={onTrackSelect}
      currentTrack={currentTrack}/>}
      

    {currentScreen==='interview' && <InterViewSection/>}
    {currentScreen==='stats' && <StatsSection/>}

  
    
    </>
  )
}

export default App
