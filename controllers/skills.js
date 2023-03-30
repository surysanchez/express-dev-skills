// controllers/todos.js
const Skill = require('../models/skill');

module.exports = {
   index,
   show
};
function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getSkills()
    });
  }
 
  function show(req, res) {
    res.render('skills/show', { 
      skill: Skill.showSkills(req.params.id),
    });
  }


