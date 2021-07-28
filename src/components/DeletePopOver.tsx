import {
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from '@chakra-ui/react';
import { VFC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/task/taskSlice';

interface PropsTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const DeletePopOver: VFC<PropsTypes> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Button
              colorScheme="red"
              onClick={() => dispatch(deleteTask(task))}
            >
              Delete
            </Button>
          </PopoverBody>
          <PopoverFooter>Careful! You cannot undo.</PopoverFooter>
        </PopoverContent>
      </Portal>
    </>
  );
};

export default DeletePopOver;
