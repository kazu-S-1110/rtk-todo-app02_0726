import sampleData from './sample.json';
import { Flex } from '@chakra-ui/react';
import TaskItem from './TaskItem';
import { VFC } from 'react';

const TaskList: VFC = () => {
  return (
    <Flex
      border="1px"
      h="60vh"
      mt="5"
      borderRadius="10"
      p="5"
      direction="column"
      overflowY="scroll"
    >
      {sampleData.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Flex>
  );
};

export default TaskList;
