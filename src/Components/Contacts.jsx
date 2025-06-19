

function Contacts() {


    return (
        <div data-aos='fade-up' id='contacts' className="mt-50 w-full h-auto relative flex flex-col items-center mb-4">
            <h1 className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10">Contacts</h1>
            <h3 className="text-center pb-7 border-b-2 min-w-[52ch] text-2xl">If you want to contact me you can sed me an Email :)</h3>
            <div className="flex gap-10 mt-4">
                <a href='https://github.com/Tiin0' className="font-bold navbarBtn">Github</a>
                <a href='https://mail.google.com/mail/u/1/?pli=1#inbox?compose=DmwnWrRlRZWfDDcgcQfWHzCNXVFpwfMPzzHVWcMsZHFzczcvLSVlPxDmnzBrbMprcncHsksslSLq' className="font-bold navbarBtn">Email</a>
            </div>
        </div>
    )
}


export default Contacts;