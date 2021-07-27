import { Flex, HStack, Text, Spacer, Button, Checkbox } from '@chakra-ui/react';
import { VFC } from 'react';
import { CalendarIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

interface PropsTypes {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskItem: VFC<PropsTypes> = ({ task }) => {
  const handleCheck = () => {
    console.log(task.id);
  };

  return (
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
        <Button variant="ghost">
          <EditIcon />
        </Button>
        <Button variant="ghost">
          <DeleteIcon />
        </Button>
      </HStack>
    </Flex>
  );
};

export default TaskItem;
