import { Flex, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createTask } from './taskSlice';

type InputTypes = {
  taskTitle: string;
};

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const addTask = (data: InputTypes) => {
    console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return (
    <Flex ml="5" mt="6">
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
        mr="7"
      >
        New Todo
      </Text>
      <form onSubmit={handleSubmit(addTask)}>
        <Input variant="filled" w="40vw" {...register('taskTitle')} />
      </form>
    </Flex>
  );
};

export default TaskForm;
