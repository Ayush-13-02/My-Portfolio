import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    Svg: {
        type: String,
        required: true,
    },
    Skill: {
        type: String,
        required: true,
    }
})

mongoose.models = {};

export const Skill = mongoose.model("Skills", SkillSchema);