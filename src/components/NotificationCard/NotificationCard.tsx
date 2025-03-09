
interface PropsNotification {
    profilePhoto: string,
    name: string,
    reaction: string,
    reminder?: string,
    isRead: boolean,
    fecha: string,
    message?: string,
    photo?: string, 
    unreadNotificationStyles: string
    onclick: () => void
}

export const NotificationCard = ({ profilePhoto, name, reaction, reminder, isRead, fecha, message, photo, unreadNotificationStyles, onclick }: PropsNotification) => {

    return (
        <div className='bg-[#f7fafd] flex mb-2.5 rounded-lg gap-3 p-4 text-sm cursor-pointer text-[#5e6778] ' onClick={ onclick }>

            <img className='size-10 ' src={profilePhoto} alt="Foto de perfil" />
            <div className='w-full'>

                <div className='flex justify-between'>
                    <p >
                        <span className='font-bold text-[#1c202b] hover:text-[#0a317b] mr-1'>{ name }</span>
                        <span className='mr-1'>{ reaction }</span>
                        <span className='font-bold hover:text-[#0a317b] mr-1'>{ reminder }</span>
                        <span className={ unreadNotificationStyles }>{ isRead }</span>
                    </p>
                    {!photo ? '' : <img className='size-10 mr-1' src={photo} alt="Foto publicación" />}
                </div>
                <div>
                    <p className='text-[#939dae] text-sm font-medium'> {fecha} </p>
                </div>
                <div>
                    <p className={!message ? '' : 'border border-[#dde7ee] rounded-md p-2 mt-2 hover:bg-[#e5effa] '}> {message} </p>
                </div>

            </div>

        </div>
    );
}