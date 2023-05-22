import Head from 'next/head'
import Image from 'next/image' 
import Layout from '../components/layout'
import Header from '../components/header'
import MysteryBoxes, { BoxesProps } from '../components/boxes'
import Modal, { ModalProps } from '../components/modal'
import { useState } from 'react'

interface Product {
  name: string;
  price: number;
}

interface InventoryItem extends Product {
  id: string;
}

export default function Home() {

  const [balance, setBalance] = useState<number>(2000);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedBoxPrice, setSelectedBoxPrice] = useState<number | null>(null);
  const [sellItem, setSellItem] = useState(0);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);


  const handleCloseModal = () => {
    setShowModal(false);
  }
  

  const updateBalance = () => {
    setBalance(balance => balance - (selectedBoxPrice || 0));
    alert("Your purchase was successful");
  }

  const balanceAfterSold = () => {
    // debugger;
    setBalance(balance + (selectedBoxPrice || 0));
  }

  const handleInventory = (product: Product) => {
    const inventoryItem: InventoryItem = {
      ...product,
      id: ` ${product.name}-${Date.now()}`,
    };
    setInventory([...inventory, inventoryItem]);
    console.log(inventory);
  }

  //Necesito que el nombre y el valor de producto se guarden en el Array de Inventory
  //Tendria que sacar esos datos de el componente Modal y pasarlos aca

  return (
    <Layout>
      <Header balance={balance} inventory={inventory} />
      {showModal && (
      <Modal onClose={handleCloseModal} price={selectedBoxPrice} sellThisItem={balanceAfterSold} getProductInfo={handleInventory} image='' title='' setSelectedPrice={function (price: number): void {
          throw new Error('Function not implemented.')
        } } />
      )}
      <MysteryBoxes updateBalance={updateBalance} soldReward={handleCloseModal} setSelectedPrice={setSelectedBoxPrice} setPrice={setSelectedBoxPrice} sellThisItem={balanceAfterSold}/>
    </Layout>
  )
}
