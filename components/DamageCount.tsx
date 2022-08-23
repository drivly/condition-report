interface Props {
  total: number;
}

const DamageCount = ({ total }: Props) => {
  return (
    <span className="mr-2 h-5 w-5 dark:bg-gray-1 bg-red-600 text-gray-1 dark:text-red-600 flex items-center justify-center rounded-full font-medium text-[12px] animate-pulse transtion-all duration-150 ease-out group-hover:animate-none">
      {total}
    </span>
  );
};

export default DamageCount;
