import { ButtonWithIcon } from '../Buttons/ButtonWhisIcon';
import { Carusel } from '../Carusel';
export const ProjectSection = ({direction = "left", data, project}) => {
  const animationClass = direction === "left" ? "animate-slideInLeft" : "animate-slideInRight";
    return (<>
    <section className={`project-section section ${animationClass}`}>
        <div className="  px-6 md:px-0 pt-6 md:pt-0">
            <h2 className='text-center'>{project.title}</h2>
            <p className='text-center'>{project.description}</p>
        </div>
        {data.images.length !== 0 && data.images !== undefined && (<Carusel images={data.images}/>)}
        <div className=" flex justify-center">
          {data.isButton === true && (
            <ButtonWithIcon isIconButton={data.isIconButton} icon={data.icon} text={project.textButton} href={data.href}/>
          )}
        </div>
    </section>
    </>)
}