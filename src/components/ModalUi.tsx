import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from '../features/task/TaskForm';
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
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <TaskForm edit />
          <ModalFooter>
            <Button onClick={() => dispatch(modalSwitch(false))}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUi;
