

function Contacts() {
  return (
    <div id='contacts' className="mt-50 w-full h-auto relative flex flex-col items-center">
      <h1 data-aos='fade-down' className="text-6xl font-extrabold text-[#B8860B] text-center pt-10 pb-10">Contacts</h1>

      <div className="xs:w-[80%] sm:max-w-[600px]">
        <p className="text-center pb-7 border-b-2 sm:text-2xl xs:text-xl font-bold">
          If you want to contact me, you can send me an email :)
        </p>
      </div>

      <div className="flex gap-10 pt-4 pb-4">
        <a
          href="https://github.com/Tiin0"
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold navbarBtn"
        >
          <span className="dark:text-white">Github</span>
        </a>

        <a
          href="konstanty.fara20@gmail.com"
          className="font-extrabold navbarBtn"
        >
          <span className="dark:text-white">Email</span>
        </a>
      </div>
    </div>
  );
}



export default Contacts;