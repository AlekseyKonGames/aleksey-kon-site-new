import { ButtonWithIcon } from '../Buttons/ButtonWhisIcon';
import { Carusel } from '../Carusel';
export const ProjectSection = ({data, t}) => {
    return (<>
    <section className="project-section section">
        <div className="  px-6 md:px-0 pt-6 md:pt-0">
            <h2 className='text-center'>{t('title')}</h2>
            <p>{t('description')}</p>
        </div>
        {data.images.length !== 0 && data.images !== undefined && (<Carusel images={data.images}/>)}
        <div className=" flex justify-center">
          {data.isButton === true && (
            <ButtonWithIcon isIconButton={data.isIconButton} icon={data.icon} text={t('textButton')} href={"/projects"}/>
          )}
        </div>
    </section>
    </>)
}