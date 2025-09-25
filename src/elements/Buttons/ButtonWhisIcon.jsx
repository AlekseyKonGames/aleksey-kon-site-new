export const ButtonWithIcon = ({isIconButton, text, icon, href}) => {
    return (
        <>
        <a href={href} className="flex items-center mb-4 md:mt-4 md:mb-0 px-4 py-2 mx-auto bg-[#ffbd5b] hover:bg-[#c49248] rounded-xl dark:bg-[#ffffff] dark:hover:bg-[#c7c7c7] transition-all duration-300 active:scale-110 hover:scale-110 dark:text-black">
              {isIconButton === true && (
                <img className=' w-5 h-5 inline-block mr-2' src={icon} alt="icon" />
              )}
              {text}
          </a>
        </>
    );
}