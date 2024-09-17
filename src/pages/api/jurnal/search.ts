import { getFilterJurnal } from "@/lib/firebase/service";
import { apiResponse } from "@/utils/apiResponse";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { value }: any = req.query;
    const response = await getFilterJurnal("search", value);
    return apiResponse(res, response, "berhasil ambil filter jurnal", response);
}