import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Todo } from './schemas/todo.schema';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name)
        private todoModel: mongoose.Model<Todo>
    ){}

    async findAll(): Promise <Todo[]>{
        const todos = await this.todoModel.find()
        return todos;
    }
    
    async create(todo: Todo): Promise<Todo>{
        const res = await this.todoModel.create(todo)
        return res;
    }

    async findById(id:string): Promise<Todo>{
        const todo = await this.todoModel.findById(id);
        return todo;
    }

    async deleteById(id:string): Promise<Todo>{
        const res = await this.todoModel.findByIdAndDelete(id)
        return res;
    }

    async updateById(id: string, todo: UpdateTodoDto ): Promise <Todo>{
        return await this.todoModel.findByIdAndUpdate(id, todo, {
            new:true,
            runValidators:true,
        })
    }

    

}
