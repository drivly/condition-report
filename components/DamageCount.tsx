interface Props {
  total: number;
}

const DamageCount = ({ total }: Props) => {
  return (
    <span className="ml-1 h-7 w-7 bg-red-600 flex items-center justify-center rounded-full text-gray-1 font-semibold text-xs animate-pulse transtion-all duration-150 ease-in">
      {total}
    </span>
  );
};

export default DamageCount;
