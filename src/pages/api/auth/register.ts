import { adminRegister } from "@/lib/firebase/service";
import { adminSecretValidation } from "@/utils/adminSecretValidation";
import { authResponse } from "@/utils/authResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req:NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        const data = req.body;
        const isValid = adminSecretValidation(data.admin);
        if(isValid) {
            const response = await adminRegister(data);
            return authResponse(res ,response);
        } else {
            return res.status(400).json({status: false, message: "admin secret salah"})
        }
    }
}
