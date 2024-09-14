import { NextApiResponse } from "next";


export const authResponse = (res: NextApiResponse ,response: string | boolean) => {
  switch (response) {
    case "username":
      return res.status(400).json({status: false, message: "username sudah digunakan"});
    case "email":
      return res.status(400).json({status: false, message: "email sudah digunakan"});
    case true:
      return res.status(200).json({status: true, message: "berhasil mendaftar"});
    default:
      return res.status(200).json({status: false, message: "koneksi firebase gagal"});
  }
};
