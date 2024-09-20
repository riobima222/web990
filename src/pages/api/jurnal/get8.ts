import { get10Jurnal } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === "GET") {
    const response = await get10Jurnal();
    return apiResponse(res, response, "berhasil ambil jurnal", response);
  }
}
