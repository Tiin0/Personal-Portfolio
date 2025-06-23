

function Contacts() {
  return (
    <div id='contacts' className="mt-50 w-full h-auto relative flex flex-col items-center mb-4">
      <h1 className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10">Contacts</h1>

      <div className="xs:w-[80%] sm:max-w-[600px]">
        <p className="text-center pb-7 border-b-2 sm:text-2xl xs:text-xl font-bold">
          If you want to contact me, you can send me an email :)
        </p>
      </div>

      <div className="flex gap-10 mt-4">
        <a
          href="https://github.com/Tiin0"
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold navbarBtn"
        >
          Github
        </a>

        <a
          href="konstanty.fara20@gmail.com"
          className="font-extrabold navbarBtn"
        >
          Email
        </a>
      </div>
    </div>
  );
}



export default Contacts;