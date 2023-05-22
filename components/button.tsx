export interface ButtonProps {
  name: string;
  onClick: () => void;
  sellThisItem?: () => void | number;
  children?: React.ReactNode;
  className?: string;
}


function Button({ name, onClick, sellThisItem }: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-2 text-white bg-orange-500 border-2 rounded-full border-slate-950"
      >
        {`${name}`}
      </button>
    </div>
  );
}

export default Button;
