import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { FC } from "react";
import { IMenuSecondMenu } from "../header.interface";
import Link from "next/link";
interface Iprops {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (isOpen: boolean) => void;
  dataMenu?: IMenuSecondMenu[];
}
export const HeaderSecondMobile: FC<Iprops> = ({
  isOpen,
  onOpen,
  onOpenChange,
  dataMenu,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="outside">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="py-10">
              <div className="flex flex-col items-start justify-start ">
                {dataMenu &&
                  dataMenu?.map((item) => {
                    return (
                      <Button
                        key={item.id}
                        variant="light"
                        color="primary"
                        as={Link}
                        href={item.href}
                        className="text-sm"
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
