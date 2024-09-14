import { updateImageKegiatan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;
    return await verifyToken(req, res, async () => {
        const response = await updateImageKegiatan(data);
        return apiResponse( res ,response, "berhasil ditambah");
      });
}