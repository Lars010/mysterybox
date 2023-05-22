import Image from "next/image"
import Boxes from "./boxes"
import { useState, FC } from "react"
import Modal from "./modal"

export interface Box {
    title: string;
    price: number;
    image: string;
}

export interface SelectedBox {
    title: string;
    price: number;
    image: string;
}

 export interface MysteryBoxesProps {
    updateBalance: (price: number) => void;
    setPrice: (price: number) => void;
    sellThisItem: (price: number) => void;
    setSelectedPrice: (price: number) => void;
    soldReward: (price: number) => void;
    getProductInfo: (product: {price: number, name: string}) => void;
}


const MysteryBoxes : FC<MysteryBoxesProps> = ({updateBalance, setPrice, sellThisItem, setSelectedPrice, getProductInfo}) => {
    const [selectedBox, setSelectedBox] = useState<SelectedBox | null>(null);
    const handleCloseModal = () => setSelectedBox(null);

    const boxes: Box[] = [
         {
            title: "PC Budget",
            price: 49.99,
            image: "/pc-budget.png",
        },
         {
            title: "Iphone 12",
            price: 2.99,
            image: "/iphone12.png",
        },
        {
            title: "Pokemon Collection",
            price: 49.99,
            image: "/pokemon-collection.png",
        },
        {
            title: "PlayStation 5",
            price: 4.99,
            image: "/ps5.png",
        },
      ]
      console.log(boxes[0].title);



    return (
        <div className="mt-24 text-center shadow-lg shadow-cyan-500/50">
            <h1 className="text-3xl">Open Mystery Boxes & Receive Shipped Real-World Items</h1>
            <div className="flex justify-center gap-6">
            <Boxes  image={boxes[0].image} onClick={() => { setSelectedBox({ image: boxes[0].image , title: boxes[0].title, price: boxes[0].price }); setPrice(boxes[0].price);}} bgColor='bg-lime-600 rounded-lg' boxName="PC Budget" title="PC Budget" price={49.99} />
            <Boxes image={boxes[1].image} onClick={() => { setSelectedBox({ image: boxes[1].image, title: boxes[1].title, price: boxes[1].price }); setPrice(boxes[1].price);}} bgColor='bg-blue-600 rounded-lg' boxName="Iphone 12" title="Iphone 12" price={2.99} />
            <Boxes image={boxes[2].image} onClick={() => { setSelectedBox({ image: boxes[2].image, title: boxes[2].title, price: boxes[2].price }); setPrice(boxes[2].price);}} bgColor='bg-red-500 rounded-lg' boxName="Pokemon Collection" title="Pokemon Collection" price={49.99} />
            <Boxes image={boxes[3].image} onClick={() =>  { setSelectedBox({ image: boxes[3].image, title: boxes[3].title, price: boxes[3].price }); setPrice(boxes[3].price);}} bgColor='bg-yellow-400 rounded-lg' boxName="PlayStation 5" title="PS5" price={4.99} />
            </div>
            {selectedBox && (
        <Modal
          image={selectedBox.image}
          title={selectedBox.title}
          soldProduct={updateBalance} 
          price={selectedBox.price}
          onClose={handleCloseModal}
          sellThisItem={sellThisItem}
          setSelectedPrice={setSelectedPrice}
          getProductInfo={getProductInfo}
        />
      )}
        </div>
    )
}

export default MysteryBoxes

   
