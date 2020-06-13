const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error:' +err));
});

router.route('/add').post((req, res) => {
    const projectname = req.body.projectname;
    const description = req.body.description;
    const department = req.body.department;
    const teamname = req.body.teamname;
    const startDate = Date.parse(req.body.startDate);
    const endDate = Date.parse(req.body.endDate);

    const newProject = new Project({
        projectname,
        description,
        department,
        teamname,
        startDate,
        endDate,
    });

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(() => res.status(400).json('Error:' +err));
    });

    router.route('/:id').get((req, res) => {
      Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    router.route('/:id').delete((req, res) => {
      Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    router.route('/update/:id').post((req, res) => {
      Project.findById(req.params.id)
        .then(project => {
          project.projectname = req.body.projectname;
          project.description = req.body.description;
          project.department = req.body.department;
          project.teamname = req.body.teamname;
          project.startDate = Date.parse(req.body.startDate);
          project.endDate = Date.parse(req.body.endDate);
    
          project.save()
            .then(() => res.json('Project updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;