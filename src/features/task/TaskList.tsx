// import sampleData from './sample.json';
import { tasks, filterSwitch, filterChange } from './taskSlice';
import { Button, Flex, HStack } from '@chakra-ui/react';
import TaskItem from './TaskItem';
import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TaskList: VFC = () => {
  const taskList = useSelector(tasks);
  const filteredSwitch = useSelector(filterSwitch);
  const dispatch = useDispatch();
  return (
    <Flex
      h="60vh"
      mt="5"
      borderRadius="10"
      p="5"
      direction="column"
      overflowY="scroll"
    >
      <HStack spacing="3">
        <Button
          w="7vw"
          colorScheme="teal"
          onClick={() => dispatch(filterChange('no-fin'))}
        >
          未完了のみ
        </Button>
        <Button
          w="7vw"
          colorScheme="teal"
          onClick={() => dispatch(filterChange('fin'))}
        >
          完了のみ
        </Button>
        <Button
          w="7vw"
          colorScheme="teal"
          onClick={() => dispatch(filterChange('all'))}
        >
          全て表示
        </Button>
      </HStack>

      {taskList.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Flex>
  );
};

export default TaskList;
