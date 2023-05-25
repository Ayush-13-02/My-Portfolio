import mongoose from 'mongoose';
import Project from '../../Model/Project';
import { connectDB } from '../../Utils/database';

export default async (req, res) => {
    if(!mongoose.connections[0].readyState)
        await connectDB();

    //console.log(req);
    let ProjectData = await Project.find();
    res.status(200).json({ProjectData})
}