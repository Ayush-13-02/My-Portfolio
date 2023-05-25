import {connectDB} from '../../Utils/database'
import {Skill} from '../../Model/Skill'

export default async(req,resp)=>{
    await connectDB();
    const Svg = req.body.svg,Skill = req.body.skill;

    if(req.method==="POST"){
        await Skill.create({
            Svg,
            Skill
        })
        resp.status(200).json({
            success:true,
            message:"Skill added Successfully"
        })
    }
}