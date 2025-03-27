export function Container({ children }: Readonly<{ children: React.ReactNode }>) {
    return(
        <div className="max-w-[1264px] mx-auto px-4">
            {children}
        </div>
    )
}