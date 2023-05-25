import { connectDB } from '../../Utils/database';

export default async (req, res) => {
    await connectDB();

    //console.log(req);
    if (req.method === "POST") {
        const Project = require("../../Model/Project");
        const Projectdata = new Project(req.body);
        Projectdata.save()
            .then(() => res.status(201).json({
                success: true,
                message: "Project added Successfully",
                data: Projectdata
            }))
            .catch((err) => res.status(500).json("Error: " + err));

    }
}