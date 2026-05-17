import React, { useEffect } from "react";
import { getQuestion, getFeedback } from "../../Utils/api";
function InterViewSection({currentTrack, setQuestionNo, setIsLoading, setQuestion, ans, setFeedback, sessionData, progressBar, currentScreen, question, isLoading, que, setAnswer, feedback, questionNo, isRetry, setIsRetry, setStat, stat, setCurrentScreen, setTotalQue, totalQue}) {

  useEffect(()=>{
    async function fetchQuestion(){
      if(currentScreen==='interview'){
        console.log(questionNo)
        setIsLoading(true);
        const fetchedQue = 'Hello'//await getQuestion(currentTrack)
        setIsLoading(false);
        setQuestion(fetchedQue)
   
      }
    }
    fetchQuestion()
  }, [currentScreen, questionNo])
  let id = 0;
  let FeedbackGen = false;
  async function feed(ans){
    if(ans.trim().length<=20){
    alert('write')
    return;
    }
    //const result = await getFeedback(ans, currentTrack);
      //console.log(result)
      const fetchedFeedback = {
          "good": [
            "Correctly identified that 'const' is block-scoped.",
            "Mentioned that it cannot be reassigned.",
            "Clear and concise explanation."
          ],
          "missing": [
            "Did not mention that objects declared with 'const' can still have mutated properties.",
            "Could have compared it briefly to 'let' or 'var' for depth.",
            "Missing mention of the 'temporal dead zone'."
          ],
          "ideal": "A 'const' variable is block-scoped and cannot be     reassigned or redeclared. However, if it holds an object or array, the internal properties or elements can still be mutated."
          };
      FeedbackGen = true;
      feedback = fetchedFeedback;
      setFeedback(feedback);
      setIsRetry(false);
    
      sessionData.push({
        
        question: question,
        answer : ans,
        good : fetchedFeedback["good"],
        missing : fetchedFeedback["missing"],
        ideal : fetchedFeedback["ideal"] 
      })
      if(questionNo===5){
        console.log('is 5')
        setStat(true);
        console.log(stat)
      }
  }

  function next(){
    setQuestionNo(prevNo => prevNo+1)
    setTotalQue(prevNo => prevNo + 1)
    setAnswer('');
    setFeedback('');
    setIsRetry(false);
  }

  function retry(){
    setAnswer('');
    setIsRetry(true)
  }

  return (
    <section
      id="interviewSection"
      className="fixed inset-0 z-10 overflow-y-auto bg-[#99a6ba] px-4 py-4.5 pb-8 sm:px-4"
    >
      <header className="mx-auto mb-4.5 flex max-w-255 items-center justify-between">
        <div className="mb-5 flex items-center gap-2.5 text-[#f7fbff]">
          <div className="grid h-7 w-7 place-items-center rounded-[7px] border border-white/20 bg-[rgba(227,166,166,0.85)] text-[0.74rem] font-bold">
            AI
          </div>
          <span className="font-semibold tracking-wide">AI InterviewPro</span>
        </div>
        <button
          type="button"
          className="h-7.5 w-7.5 cursor-pointer rounded-full border border-white/70 bg-linear-to-b from-white to-[#edf2f7] shadow-[0_7px_16px_rgba(0,0,0,0.28)]"
          aria-label="Open profile"
        />
      </header>

      <div className="mx-auto max-w-255 rounded-[14px] border border-white/95 bg-[#f9fbfd] px-5 py-5 shadow-[0_26px_55px_rgba(0,0,0,0.35)] sm:px-8 sm:py-5.5 relative">
        <p className="inline-flex items-center rounded-full bg-linear-to-b from-[#1f4f81] to-[#163e66] px-2.5 py-1.5 text-[0.67rem] font-semibold tracking-widest text-[#d9ecff] uppercase">
          {currentTrack} | JUNIOR ROLE
        </p>

        <h2 className="question-title my-3.5 mb-4 text-left p-2 text-2xl
        leading-snug font-bold tracking-tight text-black  relative z-10">
          {isLoading===true?'Loading Question': question}
        </h2>

        <div
          className="mb-4.5 h-2.5 w-full overflow-hidden rounded-full bg-[#d7dde5] relative z-0"
          role="progressbar"
          aria-valuenow={20}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Session progress"
        >
          <span className="block h-full w-[20%] rounded-full bg-linear-to-r from-[#bdc5cf] to-[#aeb9c7] transition-[width] duration-300 ease-out" />
        </div>

        <div className="answer-block text-left">
          <label
            htmlFor="answerInput"
            className="mb-2 block text-[0.86rem] font-bold text-[#202b3a] uppercase"
          >
            Your Answer:
          </label>
          <textarea
            id="answerInput"
            className="min-h-28 w-full resize-y rounded-[11px] border border-[#ccd6e0] bg-[#f5f8fc] px-3.5 py-3.5 text-[#1a2433] shadow-[inset_0_1px_2px_rgba(8,18,34,0.07)] outline-none transition focus:border-[#a9b9cf] focus:bg-[#fbfdff] focus:shadow-[inset_0_1px_2px_rgba(8,18,34,0.06),0_0_0_3px_rgba(150,170,198,0.14)]"
            placeholder="Start typing your response here..."
            value={ans}
            onChange={(e)=>{setAnswer(e.target.value)}}

          />
        </div>
        {(feedback==='' || isRetry===true) ? (<div>
          <button
            type="button"
            id="submitAnswerBtn"
            disabled={isLoading}
            onClick={()=>{feed(ans)}}
            
            className="mt-3.5 w-full cursor-not-allowed rounded-full bg-linear-to-r from-[#040e1b] via-[#091a35] to-[#050d1b] px-3.5 py-2.5 text-sm font-bold tracking-wider text-[#f3f8ff] uppercase opacity-70 shadow-[0_10px_20px_rgba(6,13,24,0.25)] enabled:cursor-pointer enabled:opacity-100 enabled:hover:-translate-y-px enabled:hover:shadow-[0_12px_22px_rgba(6,13,24,0.3)]"
          >
            Submit Answer
          </button>
          <button
            type="button"
            id="skipQuestionBtn"
            disabled={isLoading}
            className="mt-2.5 w-full cursor-not-allowed rounded-full border border-[#c5ced9] bg-linear-to-b from-white to-[#eef2f8] px-3.5 py-2.5 text-xs font-bold tracking-wider text-[#3d4a5c] uppercase opacity-55 shadow-none enabled:cursor-pointer enabled:opacity-100 enabled:hover:-translate-y-px enabled:hover:border-[#a8b6c8] enabled:hover:shadow-[0_6px_16px_rgba(6,13,24,0.12)]"
          >
            Skip question
          </button>
        </div>):''}

        {stat===true? (<button
          type="button"
          id="stats-btn"
          onClick={()=>{setCurrentScreen('stats')}}
          className="mt-3.5 w-full rounded-full bg-linear-to-r from-[#031022] to-[#0b1d36] px-4 py-2.5 text-sm font-bold tracking-wide text-[#f4f8ff] uppercase shadow-[0_8px_16px_rgba(5,11,22,0.28)] cursor-pointer hover:-translate-y-px"
        >
          Show Stats
        </button>): ''}

        <p id="submitting" hidden className="mt-4 hidden text-sm text-[#293343]">
          Submitting Your Answer
        </p>

        <p
          id="offlineAns"
          hidden
          className="mt-4 hidden rounded-xl border border-[rgba(180,191,206,0.3)] bg-linear-to-br from-[#f9fbff] to-[#edf2f9] p-3.5 text-sm leading-relaxed text-[#293343] shadow-[0_12px_26px_rgba(7,13,24,0.11)]"
        >
          Placeholder offline feedback message.
        </p>


        {/* Feedback Generation */}


        {(feedback && isRetry===false) && (<div id="feedbackk" className="mt-4  grid grid-cols-1 gap-3 sm:grid-cols-3">
          <article className="rounded-xl border border-[rgba(180,191,206,0.3)] bg-linear-to-br from-[#effaf2] to-[#dff2e5] p-3.5 shadow-[0_12px_26px_rgba(7,13,24,0.11)]">
            <h3 className="mb-2 text-base font-medium text-[#070c12]">Good</h3>
            <ul id="good" className="m-0 list-disc space-y-1.5 pl-4 text-left text-[0.9rem] leading-snug text-[#293343]">
              {
                feedback["good"].map((point, index)=>(
                  <li key={index}>{point}</li>
                ))
              }
            </ul>
          </article>

          <article className="rounded-xl border border-[rgba(180,191,206,0.3)] bg-linear-to-br from-[#fff8e7] to-[#f6ebcf] p-3.5 shadow-[0_12px_26px_rgba(7,13,24,0.11)]">
            <h3 className="mb-2 text-base font-medium text-[#070c12]">Missing</h3>
            <ul id="miss" className="m-0 list-disc space-y-1.5 pl-4 text-left text-[0.9rem] leading-snug text-[#293343]">
              {
                feedback["missing"].map((point, index)=>(
                  <li key={index}>{point}</li>
                ))
              }
            </ul>
          </article>

          <article className="rounded-xl border border-[rgba(180,191,206,0.3)] bg-linear-to-br from-[#f9fbff] to-[#edf2f9] p-3.5 shadow-[0_12px_26px_rgba(7,13,24,0.11)]">
            <h3 className="mb-2 text-base font-medium text-[#070c12]">Ideal Answer</h3>
            <p id="Ideal" className="m-0 text-left text-[0.9rem] leading-snug text-[#293343]">
              {feedback["ideal"]}
            </p>
          </article>
        </div>)};


              {/* Interview Action, Next and Retry Button */}


        {(feedback && isRetry===false) ? (<div className="interview-actions mt-4 flex justify-center gap-2.5">
          {stat===false?(<button
            type="button"
            id="nextQuestionBtn"
            onClick={()=>{next()}}
            className="rounded-full cursor-pointer bg-linear-to-r from-[#031022] to-[#0b1d36] px-4 py-2 text-sm font-bold tracking-wide text-[#f4f8ff] uppercase shadow-[0_8px_16px_rgba(5,11,22,0.28)] hover:-translate-y-px"
          >
            Next Question
          </button>):''}
          <button
            type="button"
            id="retryQuestionBtn"
            onClick={()=>{retry()}}
            className=" rounded-full cursor-pointer border border-[#d0d7e2] bg-linear-to-b from-white to-[#edf1f7] px-4 py-2 text-sm font-bold tracking-wide text-[#212a38] uppercase hover:-translate-y-px"
          >
            Retry This Question
          </button>
        </div>) : ''}
      </div>
    </section>
  );
}

export default InterViewSection;
