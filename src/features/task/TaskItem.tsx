import { Flex, HStack, Text, Spacer, Button, Checkbox } from '@chakra-ui/react';
import { VFC } from 'react';
import { CalendarIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { modalSwitch, mountTask, completeTask, deleteTask } from './taskSlice';
import { useDispatch } from 'react-redux';
import ModalUi from '../../components/ModalUi';

interface PropsTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskItem: VFC<PropsTypes> = ({ task }) => {
  const handleCheck = () => {
    dispatch(completeTask(task));
  };
  const handleEdit = () => {
    dispatch(modalSwitch(true));
    dispatch(mountTask(task));
  };

  const dispatch = useDispatch();

  return (
    <>
      <Flex w="full" bg="#C3E0FD" mb="2" borderRadius="4">
        <HStack>
          <CalendarIcon />
          <Text fontSize="xl">{task.title}</Text>
        </HStack>
        <Spacer />
        <HStack>
          <Button variant="ghost">
            <Checkbox isChecked={task.completed} onChange={handleCheck} />
          </Button>
          <Button variant="ghost" onClick={handleEdit}>
            <EditIcon />
          </Button>
          <Button variant="ghost" onClick={() => dispatch(deleteTask(task))}>
            <DeleteIcon />
          </Button>
        </HStack>
      </Flex>

      <ModalUi />
    </>
  );
};

export default TaskItem;
