import React from "react";

function StatsSection({totalQue, currentTrack, progressBar, sessionData, setCurrentScreen, currentScreen}) {
  let id = 0;

  const screen = () => {
    setCurrentScreen('landing');
    location.reload();
  }
  return (
    <section
      id="session-stats-panel"
      className="fixed inset-0 z-600 overflow-y-auto bg-[#e8ecf4] bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.75),transparent_42%),radial-gradient(circle_at_88%_100%,rgba(214,224,255,0.45),transparent_48%)] px-5 py-5 pb-14 sm:px-8"
      aria-label="Session statistics"
    >
      <div className="stats-session-inner mx-auto w-full max-w-230">
        <header className="mb-8">
          <button
            type="button"
            onClick={()=>{screen()}}
            className="stats-back-link mb-5 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#c9d4e4] bg-linear-to-b from-white to-[#eef2f8] px-3.5 py-2 text-sm font-semibold text-[#2a3a52] shadow-[0_4px_12px_rgba(15,23,37,0.08)] transition hover:-translate-y-px hover:border-[#a8b6c8]"
          >
            ← Back to interview
          </button>
          <h1 className="mb-2 text-[clamp(1.5rem,3.5vw,2rem)] font-medium tracking-tight text-[#0f1725]">
            Session statistics
          </h1>
          <p className="max-w-[52ch] text-[0.95rem] leading-normal text-[#4a5568]">
            Review every attempt, feedback highlights, and how you compared to
            the ideal answers.
          </p>
        </header>

        <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <article className="flex flex-col gap-1 rounded-[14px] border border-[rgba(31,79,129,0.2)] bg-linear-to-br from-[#f9fbff] to-[#e8eef9] p-5 shadow-[0_10px_30px_rgba(15,23,37,0.08)]">
            <span className="text-[0.72rem] font-bold tracking-widest text-[#5c6b82] uppercase">
              Questions attempted
            </span>
            <strong
              id="noOfQuestions"
              className="text-[1.65rem] leading-tight font-bold tracking-tight text-[#0f1725]"
            >
              {totalQue}
            </strong>
            <span className="text-[0.78rem] leading-snug text-[#6b7c92]">
              of 5 in this session
            </span>
          </article>

          <article className="flex flex-col gap-1 rounded-[14px] border border-[rgba(225,232,245,0.95)] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,37,0.08)]">
            <span className="text-[0.72rem] font-bold tracking-widest text-[#5c6b82] uppercase">
              Track
            </span>
            <strong
              id="yourTrack"
              className="text-xl leading-tight font-bold tracking-tight text-[#0f1725]"
            >
              {currentTrack}
            </strong>
            <span className="text-[0.78rem] leading-snug text-[#6b7c92]">
              Junior role
            </span>
          </article>

          <article className="flex flex-col gap-1 rounded-[14px] border border-[rgba(225,232,245,0.95)] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,37,0.08)]">
            <span className="text-[0.72rem] font-bold tracking-widest text-[#5c6b82] uppercase">
              Session progress
            </span>
            <strong
              id="yourProgress"
              className="text-[1.65rem] leading-tight font-bold tracking-tight text-[#0f1725]"
            >
              {(totalQue/5)*100}%
            </strong>
            <span className="text-[0.78rem] leading-snug text-[#6b7c92]">
              Questions completed vs plan
            </span>
          </article>
        </div>

        <div
          className="mb-8 h-2 overflow-hidden rounded-full bg-[#d7dde5]"
          aria-hidden="true"
        >
          <div
            className="stats-progress-bar h-full rounded-full bg-linear-to-r from-[#1f4f81] to-[#3d6fa3]"
            style={{ width: `${(totalQue/5)*100}%` }}
          />
        </div>

        <h2 className="mb-2 text-[1.15rem] font-medium text-[#0f1725]">
          Per-question breakdown
        </h2>
        <p className="mb-5 text-[0.86rem] leading-snug text-[#5c6b82]">
          Each row is one question you submitted.
        </p>

        <ol className="stats-question-list m-0 flex list-none flex-col gap-5 p-0">
          {
            sessionData.map( (data, index) => (
              
              <li key={index}
              className="stats-q-card rounded-[20px] border border-[rgba(225,232,245,0.95)] bg-white px-5 py-5 shadow-[0_20px_60px_rgba(15,23,37,0.08)] sm:px-8">
              <div className="mb-5 border-b border-[#e4e9f2] pb-5">
                <span className="mb-2.5 inline-block rounded-full bg-linear-to-b from-[#1f4f81] to-[#163e66] px-2.5 py-1 text-[0.65rem] font-bold tracking-widest text-[#d9ecff] uppercase">
                  Question {id = id +1}
                </span>
                <h3 className="m-0 text-left text-[1.05rem] leading-snug font-semibold text-[#0f1725]">
                  {data.question}
                </h3>
              </div>
              <div className="mb-5">
                <h4 className="mb-2 text-[0.72rem] font-bold tracking-wide text-[#3d4a5c] uppercase">
                  Your answer
                </h4>
                <p className="stats-q-answer m-0 rounded-[14px] border border-[#dce3ed] bg-[#f5f8fc] px-3.5 py-3 text-left text-[0.92rem] leading-snug text-[#293343]">
                  {data.answer}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[rgba(180,191,206,0.35)] bg-linear-to-br from-[#effaf2] to-[#dff2e5] px-3.5 py-3">
                  <h4 className="mb-2 text-[0.88rem] font-bold text-[#1a2433]">
                    Good
                  </h4>
                  <ul className="m-0 list-disc space-y-1.5 pl-4.5 text-left text-[0.88rem] leading-snug text-[#293343]">
                    {
                      data["good"].map((point, index)=>(
                        <li key={index}>{point}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="rounded-xl border border-[rgba(180,191,206,0.35)] bg-linear-to-br from-[#fff8e7] to-[#f6ebcf] px-3.5 py-3">
                  <h4 className="mb-2 text-[0.88rem] font-bold text-[#1a2433]">
                    Missing
                  </h4>
                  <ul className="m-0 list-disc space-y-1.5 pl-4.5 text-left text-[0.88rem] leading-snug text-[#293343]">
                    {
                      data["missing"].map((point, index)=>(
                        <li key={index}>{point}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className="rounded-xl border border-[rgba(180,191,206,0.35)] bg-linear-to-br from-[#f9fbff] to-[#edf2f9] px-3.5 py-3">
                  <h4 className="mb-2 text-[0.88rem] font-bold text-[#1a2433]">
                    Ideal answer
                  </h4>
                  <p className="m-0 text-left text-[0.88rem] leading-snug text-[#293343]">
                    {data.ideal}
                  </p>
                </div>
              </div>
            </li>)
            )
          }

          
        </ol>
      </div>
    </section>
  );
}

export default StatsSection;
