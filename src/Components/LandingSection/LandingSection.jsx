import React from 'react'



function LandingSection({currentScreen, currentTrack, onTrackSelect, setCurrentScreen}) {
    const tracks = [
      { id: 'DSA', icon: '◎' },
      { id: 'Web Dev', icon: '</>' },
      { id: 'DBMS', icon: '◍' },
      { id: 'OS', icon: '⚙' },
      { id: 'CN', icon: '◠' },
    ]

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto p-6 sm:p-8 bg-[#eef1f6] bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.7),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(214,224,255,0.38),transparent_50%)]"
    >
      <section
        id="landingSection"
        className="w-full max-w-270 rounded-[20px] border border-white/80 bg-linear-to-b from-white to-[#f5f7fb] px-6 py-5 pb-14 shadow-[0_20px_60px_rgba(15,23,37,0.08)] sm:px-8 sm:py-6 sm:pb-16"
      >
        <header className="mb-12 flex min-h-10 items-center justify-between sm:mb-14">
          <div className="text-base font-semibold tracking-wide text-[#1b2332]">
            InterviewPro
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm text-[#2b3446] no-underline"
            href="#"
            aria-label="Open Profile"
          >
            <span>Profile</span>
            <span className="h-6 w-6 rounded-full border border-[#ced6e4] bg-linear-to-br from-white to-[#f0f3f8] shadow-[inset_0_-2px_8px_rgba(15,23,37,0.06)]" />
          </a>
        </header>

        <main className="text-center [&_h1]:m-0 [&_h1]:text-[clamp(2rem,4vw,3.1rem)] [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:tracking-tight [&_h1]:text-[#0f1725]">
          <h1>AI Interview Practice</h1>
          <p className="mb-10 text-base text-[#99a6ba] sm:mb-14">
            Learn and train with your AI Mock Interviewer
          </p>

          <div
            className="mb-10 flex flex-wrap justify-center gap-3 sm:mb-14"
            role="list"
            aria-label="Interview Tracks">

            {
              tracks.map(track => (
                <button
                  key={track.id}
                  onClick={()=>onTrackSelect(track.id)}
                  className={`track-card ${currentTrack === track.id ? 'selected' : ''}`}
                  >
                  <span>{track.icon}</span>
                  <span>{track.id}</span>
                </button>  
              )
              )
            }
          </div>

          <button
            type="button" onClick={()=>{
              if(currentTrack!==null){
                setCurrentScreen('interview')
              }
            }}
            className="inline-flex min-w-44 cursor-pointer items-center justify-center rounded-[10px] bg-linear-to-br from-[#232d3c] to-[#151b24] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#f3f7ff] shadow-[0_14px_25px_rgba(15,23,37,0.2)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:shadow-[0_18px_28px_rgba(15,23,37,0.22)]"
          >
            Start Interview
          </button>
        </main>
      </section>
    </div>
  );
}

export default LandingSection;
