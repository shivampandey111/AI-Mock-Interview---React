function Popup({popup, setPopup, message, skip, setSkip, setMessage, onConfirm, setOnConfirm}) {

    
    function confirm(){
        setSkip(false);
    }

  return (
<div
    id="Overlay"
    role="dialog"
    aria-modal="true"
    aria-labelledby="Title"
    aria-describedby="Message"
    className="fixed inset-0 z-1000  grid place-items-center bg-[rgba(15,23,37,0.45)] p-5 backdrop-blur-xs transition-opacity duration-200 ease-out"
    >
    {skip ? (<div className="w-full max-w-100 rounded-[20px]  border border-[rgba(225,232,245,0.95)] bg-white px-5 py-8 text-center shadow-[0_20px_60px_rgba(15,23,37,0.08),0_0_0_1px_rgba(255,255,255,0.6)_inset] transition-[transform,opacity] duration-200 ease-out">
        <h2 id="Title" className="sr-only">
          Confirmation
        </h2>

        <p
          id="Message"
          className="mb-8 text-[1.05rem] leading-snug font-medium text-[#0f1725]"
        >
          Are You Sure You Want To Skip This Question?
        </p>
        <p>You won't receive feedback for your current draft.</p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            id="PopupBtn"
            onClick={()=>{setSkip(false)}}
            className="min-w-[100px] cursor-pointer rounded-full border border-[#d0d7e2] bg-linear-to-b from-white to-[#edf1f7] px-5 py-2.5 text-[0.8rem] font-bold tracking-wide text-[#212a38] uppercase transition hover:-translate-y-px hover:border-[#b8c4d4]"
          >
            No
          </button>
          <button
            type="button"
            id="ConfirmYes"
            onClick={()=>{setOnConfirm()}}
            className="min-w-[100px] cursor-pointer rounded-full border-0 bg-linear-to-r from-[#031022] to-[#0b1d36] px-5 py-2.5 text-[0.8rem] font-bold tracking-wide text-[#f4f8ff] uppercase shadow-[0_8px_16px_rgba(5,11,22,0.28)] transition hover:-translate-y-px hover:shadow-[0_12px_20px_rgba(5,11,22,0.32)]"
          >
            Yes, Skip
          </button>
        </div>
    </div>): ''}

    {message ? (<div className="w-full max-w-[400px] rounded-[20px]  border border-[rgba(225,232,245,0.95)] bg-white px-5 py-8 text-center shadow-[0_20px_60px_rgba(15,23,37,0.08),0_0_0_1px_rgba(255,255,255,0.6)_inset] transition-[transform,opacity] duration-200 ease-out">
        <p
          id="Message"
          className="mb-8 text-[1.05rem] leading-snug font-medium text-[#0f1725]"
        >
          Please Explain More
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            id="PopupBtn"
            onClick={()=>{setPopup(false)}}
            className="min-w-25 cursor-pointer rounded-full border border-[#d0d7e2] bg-linear-to-b from-white to-[#edf1f7] px-5 py-2.5 text-[0.8rem] font-bold tracking-wide text-[#212a38] uppercase transition hover:-translate-y-px hover:border-[#b8c4d4]"
          >
            Okay
          </button>
        </div>
    </div>):''}
</div>
  );
}

export default Popup;
