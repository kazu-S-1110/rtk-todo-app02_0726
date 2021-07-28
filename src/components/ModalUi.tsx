import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
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
            <Button type="submit" colorScheme="blue" mr={3}>
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
