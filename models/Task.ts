
import { Document, model, Schema } from 'mongoose';

export type Task = {
  task: string;
}

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
});

const TaskModel = model<Task>('Task', taskSchema);

export default TaskModel;
