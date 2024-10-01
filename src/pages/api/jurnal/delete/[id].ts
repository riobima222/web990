import { deleteJurnal } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "DELETE") {
        const idJurnal: any = req.query.id;
        return await verifyToken(req, res, async () => {
            const response = await deleteJurnal(idJurnal);
            return apiResponse(res, response, "berhasil hapus jurnal", response);
        });
    }
}