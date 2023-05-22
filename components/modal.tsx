import Image from "next/image";
import Button from "./button";
import { useState } from "react";


export interface Product {
  name: string;
  price: number;
  image: string;
}

export interface ModalProps {
  image: string;
  title: string;
  price: number | null;
  onClose: () => void;
  soldProduct?: (price: number) => void;
  sellThisItem: (price: number) => void | number;
  setSelectedPrice: (price: number) => void;
  getProductInfo: (product: {price: number, name: string}) => void;
}

function Modal({ image, title, price, onClose, soldProduct, sellThisItem, setSelectedPrice, getProductInfo }: ModalProps) {

  const products: Product[] = [
    {
      name: "Headset",
      price: 40,
      image: "/headset.png"
    },
    {
      name: "Keyboard",
      price: 50,
      image: "/keyboard.png"
    },
    {
      name: "Mouse Pad",
      price: 30,
      image: "/mousepad.png"
    },
    {
      name: "Tower PC",
      price: 899,
      image: "/tower.png"
    },
    {
      name: "Ps5 Controller",
      price: 99,
      image: "/ps5-controller.png"
    },
    {
      name: "PlayStation 5",
      price: 599,
      image: "/ps5-gold.png"
    },
    {
      name: "Iphone 12",
      price: 899,
      image: "/iphone.png"
    },
    {
     name: "Pokemon Box",
      price: 249,
      image: "/pokemon-box.png",
    },
    {
      name: "Pokemon Bundle",
      price: 90,
      image: "/pokemon-bundle.png"
    },
    {
      name: "Charizard Pokemon Card",
      price: 10000,
      image: "/charizard.png"
    },
    {
      name: "Venusaur Pokemon Card",
      price: 10000,
      image: "/venusaur.png"
    },
    {
      name: "Pokemon Special Boxes",
      price: 15000,
      image: "/pokemon-special.png"
    },
     
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  

  const handleOpenBox = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setSelectedProduct(products[randomIndex]);
    setSelectedPrice(products[randomIndex].price);
    if (soldProduct) soldProduct(products[randomIndex].price);
    if (getProductInfo) getProductInfo({ price: products[randomIndex].price, name: products[randomIndex].name });;
  };


  console.log(selectedProduct);


    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">

        {selectedProduct ? (
        <div className="p-8 rounded-lg bg-slate-300">
          <Image src={selectedProduct.image} alt={selectedProduct.name} width={300} height={300} />
          <h2 className="mt-4 text-2xl font-bold text-black">{selectedProduct.name}</h2>
          <p className="mt-2 text-lg text-black">{`$${selectedProduct.price}`}</p>
          <div className="flex items-center justify-center gap-4 mt-4">
          <button
              className="px-4 py-2 text-white bg-gray-400 border-2 rounded-full border-slate-950"
              onClick={() => setSelectedProduct(null)}
            >
              TRY AGAIN
            </button>
            <Button
              className="px-4 py-2 text-white bg-green-400 border-2 border-green-700 rounded-full"
              name= {`SELL FOR $${selectedProduct.price}`}
              sellThisItem={() => sellThisItem(selectedProduct.price)}
              onClick={() => { 
                alert(`You sold ${selectedProduct.name} for $${selectedProduct.price}`);
                sellThisItem(selectedProduct.price);
                setSelectedProduct(null);
              }}
            >
              
            </Button>
          </div>
        </div>
        ) : (

          <div className="p-8 text-center rounded-lg bg-slate-300">
          <Image src={image} alt={title} width={300} height={300} />
          <h2 className="mt-4 text-2xl font-bold text-black">{title}</h2>
          <p className="mt-2 text-lg text-black">{price}</p>

          <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="px-4 py-2 text-white bg-gray-400 border-2 rounded-full border-slate-950"
            onClick={onClose}
          >
            Close
          </button>
          <Button name={`Open Box FOR $${price}`} onClick={ handleOpenBox } />
          </div>
        </div>
        )}
      </div>
    );
}

      

    export default Modal;