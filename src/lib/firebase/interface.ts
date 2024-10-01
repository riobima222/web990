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
  created_At: Date;
}

export interface KegiatanInter {
  title: string;
  linkvideo: string;
  keterangan: string;
  image: string;
  ketSingkat: string;
  created_At: Date;
}

export interface JurnalInter {
  id?: string;
  title: string;
  sinta: string;
  linkjurnal: string;
  image: string;
  created_At: Date;
  internasional_indexed: string;
  nasional_indexed: string;
}
