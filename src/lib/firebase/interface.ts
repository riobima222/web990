export interface DataLogin {
    email: string;
    password: string;
}

export interface DataRegister {
    username: string;
    email: string;
    password: string;
    admin: string;
    createdAt: Date;
}
export interface LayananInter {
    title: string;
    kontak: string;
    tagihan: string;
    keterangan: string;
    image: string;
    ketSingkat: string;
  }