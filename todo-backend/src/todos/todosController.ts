import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { todo } from "./todo";
import {TodoService, TodoCreationParams} from "./todoService";

@Route("todo")
export class TodoController extends Controller{
  @Get("{todoId}")
  public async getTodo(
    @Path() todoId : string
  ): Promise<todo>{
    return new TodoService().get(todoId);
  }

  @SuccessResponse("201", "Created")
  @Post()
  // @Response<void>() // Add this line to specify the response type
  public async createTodo(
    @Body() requestBody: TodoCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new TodoService().create(requestBody);
    return;
  }
}





