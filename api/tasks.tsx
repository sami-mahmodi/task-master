
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/db.';
import TaskModel, { Task } from '../models/Task';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const tasks = await TaskModel.find();


    res.status(200).json(tasks);

    
  } else if (req.method === 'POST') {


    const { task } = req.body;
    const newTask = new TaskModel({ task });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } else if (req.method === 'PUT') {
    const { id, task } = req.body;
    const updatedTask = await TaskModel.findByIdAndUpdate(id, { task }, { new: true });
    res.status(200).json(updatedTask);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await TaskModel.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
};
