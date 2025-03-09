type HandlerButtonText = {
    content: string
    onclick: () => void
}

export const PrimaryBotton = ({ content, onclick }: HandlerButtonText) => {
    return (
        <button type="button" className='text-[#5e6778] text-sm font-semibold cursor-pointer hover:text-[#0a317b]' onClick={ onclick }>{ content }</button>
    );
}