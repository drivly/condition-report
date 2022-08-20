export const newTextColor = (value: number) => value > 0 && value < 3
  ? "text-dirty-yellow"
  : value > 3
  ? "text-green-accent"
  : "text-gray-6"

  export const newBgColor = (value: number) => value > 0 && value < 3
  ? "bg-dirty-yellow"
  : value > 3
  ? "bg-green-accent"
  : "bg-dark-1 dark:bg-gray-1"