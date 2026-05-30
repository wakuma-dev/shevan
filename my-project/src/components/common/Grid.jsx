export default function Grid({children}) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 lg:gap-3">
            {children}
        </div>
    )
}