import { getDetailLayanan } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        const idLayanan: any = req.query.idLayanan;
        const response = await getDetailLayanan(idLayanan);
        return apiResponse( res ,response, "berhasil ambil detail layanan", response);
    }
}