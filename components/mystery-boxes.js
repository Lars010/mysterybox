import Image from "next/image"
import Boxes from "./boxes"


function MysteryBoxes() {
    return (
        <div className="mt-24 text-center shadow-lg shadow-cyan-500/50">
            <h1 className="text-3xl">Open Mystery Boxes & Receive Shipped Real-World Items</h1>
            <div className="flex justify-center gap-6">
            <Boxes image="/pc-budget.png" bgColor='bg-lime-600 rounded-lg' boxName="PC Budget" title="PC Budget" price="$49.99" />
            <Boxes image="/iphone12.png" bgColor='bg-blue-600 rounded-lg' boxName="Iphone 12" title="Iphone 12" price="$2.99" />
            <Boxes image="/pokemon-collection.png" bgColor='bg-red-500 rounded-lg' boxName="Pokemon Collection" title="Pokemon Collection" price="$49.99" />
            <Boxes image="/ps5.png" bgColor='bg-yellow-400 rounded-lg' boxName="PlayStation 5" title="PS5" price="$4.99" />
            </div>
        </div>
    )
}

export default MysteryBoxes

// Ahora toca crear un modal que al darle click a uno de las cajas
// se abra y muestre el contenido de la caja osea lo q se va a comprar
