import { Flex, Input, Text } from '@chakra-ui/react';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, selectTask, editTask, modalSwitch } from './taskSlice';

type InputTypes = {
  taskTitle: string;
};
type PropsTypes = {
  edit?: boolean;
};

const TaskForm: VFC<PropsTypes> = ({ edit }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectTask);
  const addTask = (data: InputTypes) => {
    console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const editedTask = (data: InputTypes) => {
    const sendTask = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendTask));
    dispatch(modalSwitch(false));
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
        {edit ? 'Edit task' : 'New Task'}
      </Text>
      {edit ? (
        <form onSubmit={handleSubmit(editedTask)}>
          <Input
            variant="filled"
            w="40vw"
            defaultValue={selectedTask.title}
            {...register('taskTitle', { required: true })}
          />
        </form>
      ) : (
        <form onSubmit={handleSubmit(addTask)}>
          <Input
            variant="filled"
            w="40vw"
            {...register('taskTitle', { required: true })}
          />
        </form>
      )}
    </Flex>
  );
};

export default TaskForm;
