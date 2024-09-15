import { deleteLayanan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "DELETE") {
        const idLayanan: any = req.query.idLayanan;
        return await verifyToken(req, res, async () => {
            const response = await deleteLayanan(idLayanan);
            return apiResponse(res, response, "berhasil ditambah", response);
        });
    }
}