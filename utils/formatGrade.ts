export default async function formatGrade(value: number) {
  if (value <= 3) {
    return "text-yellow-400"
  } else if ( value > 3) {
    return "text-green-accent"
  }
}
