import * as NextImage from "next/image";
// import MyImage from "next/image"

export interface BoxesProps {
    image: string;
    title: string;
    price: number;
    boxName: string;
    bgColor: string;
    onClick: () => void;
  }


function Boxes({image, title, price, boxName, bgColor, onClick} : BoxesProps) {
    return (
        <div className="p-4 mt-10 bg-slate-600 w-72">
            <NextImage.default src={image} alt="mysteryBox" title={title} width={250} height={250} />
            <p className="mt-4">{boxName}</p>
            <div className={bgColor}>
            <div onClick={onClick} className='flex justify-end p-2 mt-4 text-black cursor-pointer'>  
                <p className="font-bold">UNBOX</p>
                <p className="px-1 ml-12 bg-white rounded-lg">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Boxes
