const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectname: { type: String, required: true},
    description: { type: String, required: true},
    department: { type: String, required: true},
    teamname: { type: String, required: true},
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    }, {
        timestamps: true,
    });
    
    const Project = mongoose.model('Project', projectSchema);

    module.exports = Project;