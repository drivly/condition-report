export default function formatVehicleDetails(input: string) {
  input = input.toLowerCase().replace(/_/g, " ")
  return input
}