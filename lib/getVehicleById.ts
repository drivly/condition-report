import vehicles from "lib/vehicles.json";

export const getVehicleById = async (id: string | undefined) => {
  const vehicle = vehicles.find((vehicle) => vehicle.id === id);
  return vehicle
}