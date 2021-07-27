// import sampleData from './sample.json';
import { tasks } from './taskSlice';
import { Flex } from '@chakra-ui/react';
import TaskItem from './TaskItem';
import { VFC } from 'react';
import { useSelector } from 'react-redux';

const TaskList: VFC = () => {
  const taskList = useSelector(tasks);
  return (
    <Flex
      h="60vh"
      mt="5"
      borderRadius="10"
      p="5"
      direction="column"
      overflowY="scroll"
    >
      {taskList.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Flex>
  );
};

export default TaskList;
