import NavBarRegister from "@/components/nav-main-car"

export default function CrudLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
            <section>
            <div>
                <NavBarRegister/>
            </div>
            </section>
        {children}
        
        </body>
        </html>
    )
}