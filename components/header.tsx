import Image from "next/image";
import { useState } from "react";

interface Product {
  name: string;
  price: number;
}

interface HeaderProps {
  balance: number;
  inventory: Product[];
}

function Header({ balance, inventory }: HeaderProps) {
  const [inventoryOpen, setInventoryOpen] = useState(false);

  return (
    <div className="flex items-center justify-end h-10 shadow-lg shadow-cyan-500/50">
      <div
        className="flex justify-center p-2 mr-10 border-2 border-slate-500"
        id="balance"
      >
        <Image src="/monedas.png" alt="balance" width={18} height={18} />
        <p className="ml-4" id="balance">
          ${balance.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center" id="user">
        <p className="mr-4">Michael</p>
        <Image
          src="/user1.png"
          className="cursor-pointer"
          alt="user"
          width={40}
          height={40}
          onClick={() => setInventoryOpen(true)}
        />
      </div>
      {inventoryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="p-6 bg-white rounded-md">
            <h2 className="mb-4 text-xl font-semibold text-slate-500">Inventory</h2>
            {inventory ? (
              <ul>
                {inventory.map((product, index) => (
                  <li key={index}>
                    {product.name}: ${product.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items in inventory</p>
            )}
            <button className="px-4 py-2 text-white bg-orange-500 border-2 rounded-full border-slate-950" onClick={() => setInventoryOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
