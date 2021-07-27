import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { modalSwitch, isModalOpen } from '../features/task/taskSlice';

const ModalUi = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(isModalOpen);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isModal}
        onClose={() => dispatch(modalSwitch(false))}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => dispatch(modalSwitch(false))}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUi;
