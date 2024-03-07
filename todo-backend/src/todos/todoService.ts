import { title } from 'process';
import {todo} from './todo';

export type TodoCreationParams = Pick<todo, "title" | "description">

export class TodoService{
    public get(todoId :  string): todo{
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false
        }
    }

    public create(todoCreationParams: TodoCreationParams): todo{
        console.log("mock db call");
        return{
            id: "1",
            title: "mpcked todo",
            description: "mocked todo",
            done: false
        }
    }
}