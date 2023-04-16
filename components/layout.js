
function Layout({ children }) {
    return (
        <div className="w-screen h-screen bg-[url('/mysteryboxbg.jpg')] m-0 bg-cover bg-no-repeat">
            <div className="container px-3 pt-10 mx-auto ">
                {children}
            </div>
        </div>
    )
}

export default Layout


