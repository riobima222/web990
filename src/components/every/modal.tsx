import { ConfirmDeleteContext } from "@/context/confirmDeleteContext";
import { ModalAppearContext } from "@/context/modalAppear";
import { useContext, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { setShowModal } = useContext(ModalAppearContext) as {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const { setConfirmDelete }: any = useContext(
    ConfirmDeleteContext
  );
  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === divRef.current) {
      setShowModal(false);
      setConfirmDelete(false);
    }
  };
  return (
    <div
      onClick={close}
      ref={divRef}
      className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-3"
    >
      {children}
    </div>
  );
};
