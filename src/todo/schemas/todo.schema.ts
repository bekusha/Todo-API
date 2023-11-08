import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Todo{
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    done: false;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);