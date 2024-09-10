import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { FC } from "react";
import { IMenuSecondMenu } from "../header.interface";
import HeaderMenuItem from "./HeaderMenuItem";

interface Iprops {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (isOpen: boolean) => void;
  dataMenu?: IMenuSecondMenu[];
}

const HeaderMobileMenu: FC<Iprops> = ({
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
              {dataMenu &&
                dataMenu?.map((itemMenu: IMenuSecondMenu | undefined) => {
                  return <HeaderMenuItem key={itemMenu?.id} item={itemMenu} />;
                })}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HeaderMobileMenu;
