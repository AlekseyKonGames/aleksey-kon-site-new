export const ArrowButton = ({ isRight, onClick }) => {
    return (
        <>
        <button onClick={onClick} className={`${isRight ? '' : 'rotate-180 '} `}>
            <svg className="transform transition-transform duration-300 hover:scale-130 active:scale-130 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-orange-400 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
            </svg> 
        </button>
        </>
    );
}