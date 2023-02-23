import { ITodoCoreField } from '../types';

export const MockTodoList: ITodoCoreField[] = [
  {
    id: '1',
    createdAt: new Date(),
    done: false,
    title: 'Learn React',
  },
  {
    id: '2',
    createdAt: new Date(),
    done: true,
    title: 'Learn Angular',
  },
  {
    id: '3',
    createdAt: new Date(),
    done: true,
    title: 'Learn Vue',
  },
];

export const getDefaultTodo = (): ITodoCoreField => {
  const now = new Date();
  return {
    createdAt: now,
    done: false,
    id: now.getTime().toString(),
    title: '',
  };
};
