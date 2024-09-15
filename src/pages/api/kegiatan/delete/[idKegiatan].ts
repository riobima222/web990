import { deleteKegiatan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "DELETE") {
        const idKegiatan: any = req.query.idKegiatan;
        return await verifyToken(req, res, async () => {
            const response = await deleteKegiatan(idKegiatan);
            return apiResponse(res, response, "berhasil ditambah", response);
        });
    }
}