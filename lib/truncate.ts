export const truncate = (string: string | any[], num: number) => {
  return string?.length > num ? string?.slice(0, num) + "..." : string
}