import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Get()
    async getAllTodos(): Promise <Todo[]>{
        return this.todoService.findAll()
    }

    @Post('new')
    async createTodo(
        @Body()
        todo
    ): Promise <Todo>{
        return this.todoService.create(todo)
    }

}
