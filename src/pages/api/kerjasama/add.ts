import { addKerjasama } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        const data = req.body;
        return await verifyToken(req, res,async () => {
            const response = await addKerjasama(data);
            return apiResponse(res ,response, "berhasil ditambah", response);
        });
    }
}
