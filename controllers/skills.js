//controllers/todos.js
const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new:newSkill
};


function newSkill(req, res) {
  res.render('/todos/new', {title:'New Skill'});

}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.showSkills(req.params.id),
    title: 'To-Learn Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getSkills(),
    title: 'All Skills'
  });
}
