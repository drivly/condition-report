export default function formatVehicleDetails(input: string) {
  return input.toLowerCase().replace(/_/g, " ")
}