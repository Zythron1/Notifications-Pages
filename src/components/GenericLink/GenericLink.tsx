
interface LinkItem {
    text: string,
    path: string
}

export const GenericLink: React.FC<LinkItem> = ({ text, path }) => {
    return (
        <a href={path}>{ text }</a>
    )
}   