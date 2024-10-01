import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./init";
import bcrypt from "bcrypt";
import {
  DataLogin,
  DataRegister,
  JurnalInter,
  KegiatanInter,
  LayananInter,
} from "./interface";

// AUTHENTICATION
export const adminRegister = async (data: DataRegister) => {
  try {
    const q = query(collection(db, "admin"), where("email", "==", data.email));
    const q2 = query(
      collection(db, "admin"),
      where("username", "==", data.username)
    );
    const snapshot1 = await getDocs(q);
    const snapshot2 = await getDocs(q2);
    const admins = snapshot1.docs.map((doc) => doc.data());
    const admins2 = snapshot2.docs.map((doc) => doc.data());

    if (admins.length > 0) {
      return "email";
    } else if (admins2.length > 0) {
      return "username";
    } else {
      data.createdAt = new Date();
      data.password = await bcrypt.hash(data.password, 10);
      await addDoc(collection(db, "admin"), data);
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const adminLogin = async (data: DataLogin) => {
  const q = query(collection(db, "admin"), where("email", "==", data.email));
  const snapshot = await getDocs(q);
  const datas = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const admin = datas[0];
  if (admin) {
    return admin;
  } else {
    return false;
  }
};

// LAYANAN
export const getAllLayanan = async () => {
  try {
    const layananRef = collection(db, "layanan");
    const snapshot = await getDocs(layananRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    return false;
  }
};

export const addLayanan = async (data: LayananInter) => {
  try {
    const docRef = await addDoc(collection(db, "layanan"), data);
    return docRef.id;
  } catch (err) {
    return false;
  }
};

export const updateImageLayanan = async (data: {
  idLayanan: string;
  imageURL: string;
}) => {
  try {
    await updateDoc(doc(db, "layanan", data.idLayanan), {
      image: data.imageURL,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const getDetailLayanan = async (idLayanan: string) => {
  try {
    const snapshot = await getDoc(doc(db, "layanan", idLayanan));
    const data = snapshot.data();
    return data;
  } catch (err) {
    return false;
  }
};

export const deleteLayanan = async (idLayanan: string) => {
  try {
    await deleteDoc(doc(db, "layanan", idLayanan));
    return true;
  } catch (err) {
    return false;
  }
};

// KEGIATAN
export const getAllKegiatan = async () => {
  try {
    const kegiatanRef = collection(db, "kegiatan");
    const snapshot = await getDocs(kegiatanRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    return false;
  }
};

export const addKegiatan = async (data: KegiatanInter) => {
  try {
    const docRef = await addDoc(collection(db, "kegiatan"), data);
    return docRef.id;
  } catch (err) {
    return false;
  }
};

export const updateImageKegiatan = async (data: {
  idKegiatan: string;
  imageURL: string;
}) => {
  try {
    await updateDoc(doc(db, "kegiatan", data.idKegiatan), {
      image: data.imageURL,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const getDetailKegiatan = async (idKegiatan: string) => {
  try {
    const snapshot = await getDoc(doc(db, "kegiatan", idKegiatan));
    const data = snapshot.data();
    return data;
  } catch (err) {
    return false;
  }
};

export const deleteKegiatan = async (idKegiatan: string) => {
  try {
    await deleteDoc(doc(db, "kegiatan", idKegiatan));
    return true;
  } catch (err) {
    return false;
  }
};

// JURNAL
export const addJurnal = async (data: JurnalInter) => {
  try {
    const docRef = await addDoc(collection(db, "jurnal"), data);
    return docRef.id;
  } catch (err) {
    return false;
  }
};

export const updateImageJurnal = async (data: {
  idJurnal: string;
  imageURL: string;
}) => {
  try {
    await updateDoc(doc(db, "jurnal", data.idJurnal), {
      image: data.imageURL,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const getAllJurnal = async () => {
  try {
    const jurnalRef = collection(db, "jurnal");
    const q = query(jurnalRef, orderBy("created_At", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    return false;
  }
};

export const get10Jurnal = async () => {
  try {
    const jurnalRef = collection(db, "jurnal");
    const q = query(jurnalRef, orderBy("created_At", "desc"), limit(8));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    return false;
  }
};

export const getFilterJurnal = async (type: string, value: string) => {
  try {
    let q;
    if (type === "nasional") {
      q = query(
        collection(db, "jurnal"),
        where("nasional_indexed", "==", value)
      );
    } else if (type === "internasional") {
      q = query(
        collection(db, "jurnal"),
        where("internasional_indexed", "==", value)
      );
    } else {
      // Pencarian case-insensitive
      const searchTerm = value.toLowerCase().trim();
      q = query(
        collection(db, "jurnal"),
        where("keywords", "array-contains", searchTerm)
      );
    }
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    console.error("Error in getFilterJurnal:", err);
    return [];
  }
};

export const deleteJurnal = async (idJurnal: string) => {
  try {
    await deleteDoc(doc(db, "jurnal", idJurnal));
    return true;
  } catch (err) {
    return false;
  }
};

// KERJASAMA
export const addKerjasama = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, "kerjasama"), data);
    return docRef.id;
  } catch (err) {
    return false;
  }
};

export const updateImageKerjasama = async (data: {
  idKerjasama: string;
  imageURL: string;
}) => {
  try {
    await updateDoc(doc(db, "kerjasama", data.idKerjasama), {
      image: data.imageURL,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const getAllKerjasama = async () => {
  try {
    const kerjasamaRef = collection(db, "kerjasama");
    const q = query(kerjasamaRef, orderBy("created_At", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (err) {
    return false;
  }
};

export const deleteKerjasama = async (idKerjasama: string) => {
  try {
    await deleteDoc(doc(db, "kerjasama", idKerjasama));
    return true;
  } catch (err) {
    return false;
  }
};
