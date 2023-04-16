import Image from "next/image"


function Header() {
    return (
        <div className="flex items-center justify-end h-10 shadow-lg shadow-cyan-500/50">
            <div className="flex justify-center p-2 mr-10 border-2 border-slate-500" id="balance">
                <Image src="/monedas.png" alt="balance" width={18} height={18} />
                <p className="ml-4">$2,000.00</p>
            </div>
            <div className="flex items-center" id="user">
                <p className="mr-4">Michael</p>
                <Image src="/user1.png" alt="user" width={40} height={40} />
            </div>
        </div>
    )
}

export default Header
