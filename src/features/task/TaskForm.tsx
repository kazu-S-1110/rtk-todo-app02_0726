import { Flex, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type InputTypes = {
  taskTitle: string;
};

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const createTask = (data: InputTypes) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(createTask)}>
        <Input variant="filled" w="40vw" {...register('taskTitle')} />
      </form>
    </Flex>
  );
};

export default TaskForm;
