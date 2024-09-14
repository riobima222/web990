import { getDetailKegiatan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const idKegiatan: any = req.query.idKegiatan;
    const response = await getDetailKegiatan(idKegiatan);
    return apiResponse(
      res,
      response,
      "berhasil ambil detail layanan",
      response
    );
  }
}
