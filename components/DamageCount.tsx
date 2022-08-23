interface Props {
  total: number;
}

const DamageCount = ({ total }: Props) => {
  return (
    <span className="mr-2 h-4 w-4 dark:bg-gray-1 bg-red-600 text-gray-1 dark:text-red-600 flex items-center justify-center rounded-full font-semibold text-[12px] animate-pulse transtion-all duration-150 ease-out group-hover:animate-none">
      {total}
    </span>
  );
};

export default DamageCount;
