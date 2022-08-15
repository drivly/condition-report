// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import vehicles from "lib/vehicles.json";

type Data = {} | string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(vehicles);
  } else {
    res.status(405).send("Only 'GET' method allowed for this route!");
  }
}
