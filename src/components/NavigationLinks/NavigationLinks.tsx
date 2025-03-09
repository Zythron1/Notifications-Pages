import { GenericLink } from '../index'

export const NavigationLinks: React.FC = () => {
    return (
        <ul className="flex w-auto gap-5 font-semibold text-[17px] text-[#e5effa]">
                <li className='shrink active:scale-95 '> <GenericLink text='Home' path='/' /> </li>
                <li className='shrink active:scale-95'> <GenericLink text='Contactanos' path='/' /></li>
                <li className='shrink active:scale-95'> <GenericLink text='Más' path='/' /> </li>
            </ul>
    )
}   