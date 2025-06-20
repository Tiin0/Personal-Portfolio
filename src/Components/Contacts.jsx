

function Contacts() {


    return (
        <div id='contacts' className="mt-50 w-full h-auto relative flex flex-col items-center mb-4">
            <h1 className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10">Contacts</h1>
            <div className="xs:w-[80%] sm:w-auto">
                <h3 className="text-center pb-7 border-b-2 sm:text-2xl xs:text-xl">If you want to contact me you can sed me an Email :)</h3>
            </div>

            <div className="flex gap-10 mt-4">
                <a href='https://github.com/Tiin0' className="font-bold navbarBtn">Github</a>
                <a href='https://mail.google.com/mail/u/1/?pli=1#inbox?compose=DmwnWrRlRZWfDDcgcQfWHzCNXVFpwfMPzzHVWcMsZHFzczcvLSVlPxDmnzBrbMprcncHsksslSLq' className="font-bold navbarBtn">Email</a>
            </div>
        </div>
    )
}


export default Contacts;