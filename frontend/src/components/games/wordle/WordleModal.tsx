"use client";

import { selectLost, selectWon } from "@/state/games/wordleSlice";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function WordleModal() {
  const won = useSelector(selectWon);
  const lost = useSelector(selectLost);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (won || lost) {
      onOpen();
    }
  }, [won, lost]);

  const message = won ? "You won! 🎉" : "You lost. 💀";
  const bg = won ? "bg-success" : "bg-danger"

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className={`${bg} flex items-center justify-center font-bold text-xl`}>
          {message}
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
