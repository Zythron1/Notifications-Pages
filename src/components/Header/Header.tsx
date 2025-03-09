import { NavigationLinks, CompanyLogo } from '../index'

export const Header: React.FC = () => {
    return (
        <header className='z-40 sticky top-0 bg-[#1c202b] border-b border-[#939dae]'>
            <nav className='flex h-14 place-items-center gap-4 mx-2 sm:mx-4'>
                <div className='justify-items-start shrink'> <CompanyLogo /> </div>
                <div className='flex grow justify-end'> < NavigationLinks /> </div>
            </nav>

        </header>
    );
}


