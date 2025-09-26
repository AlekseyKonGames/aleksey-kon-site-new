import { ButtonWithIcon } from "../elements/Buttons/ButtonWhisIcon";
import { useTranslation } from 'react-i18next';
export const NotFound = () => {
    const { t: NotFound } = useTranslation('notFound');
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">{NotFound('title')}</h1>
            <p className="mt-4">{NotFound('description')}</p>
            <div className="flex justify-center">
                <ButtonWithIcon text={NotFound('goHome')} href="/" />
            </div>
        </div>
    );
};
