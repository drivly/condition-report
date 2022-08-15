// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import vehicles from "lib/vehicles.json"

type Data = {} | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    const vehicle = vehicles.find((vehicle) => vehicle.id === id)

    try {
      if (!vehicle) {
        throw Error(`No vehicle found with that ${id}`)
      }
      res.status(200).json(vehicle)
      
    } catch (error) {
      console.error(error)
      return res.status(404).send("Try looking for another vehicle")
    }
  }
}
