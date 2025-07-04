

function Card(props) {
    return (
        <div
            key={props.key}
            data-aos="fade-left"
            className="group relative lg:w-50 lg:h-50 xs:w-45 xs:h-45 border border-black dark:border-white shadow-2xl flex items-center justify-center rounded-lg overflow-hidden bg-white dark:bg-[#2c2c2c]"
        >
            <div className="w-[40%] h-[40%] z-10 transition-transform duration-300 group-hover:-translate-y-5">
              <img src={props.img} className="w-full h-full object-contain" />
                </div>
                    <h2 className="absolute bottom-6 text-xl font-semibold text-gray-700 dark:text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-adlam">
                {props.title}
            </h2>
        </div>)
}




export default Card;