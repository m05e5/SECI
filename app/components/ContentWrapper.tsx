export default function ContentWrapper({className, children}: {className?: string, children: React.ReactNode}) {
    return (
        <div className={`max-w-[1100px] mx-auto flex p-3 ${className}`}>
            {children}
        </div>
    )
}
