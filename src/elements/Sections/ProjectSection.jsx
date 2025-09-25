import { ButtonWithIcon } from '../Buttons/ButtonWhisIcon';
import { Carusel } from '../Carusel';
export const ProjectSection = ({data}) => {
    return (<>
    <section className="project-section section">
        <div className="  px-6 md:px-0 pt-6 md:pt-0">
            <h2 className='text-center'>My Projects</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odio praesentium. Aperiam culpa odio quas laborum ad quae asperiores eos?</p>
        </div>
        <Carusel images={data.images}/>
        <div className=" flex justify-center">
          {data.isButton === true && (
            <ButtonWithIcon isIconButton={data.isIconButton} icon={data.icon} text={"View All Projects ..."} href={"/projects"}/>
          )}
        </div>
    </section>
    </>)
}