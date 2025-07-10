import Topbar from "@/components/TopNavbar"


export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <main>
            <div>
                <Topbar />
            </div>
        {children}
        </main>
        </body>
        </html>
    )
}