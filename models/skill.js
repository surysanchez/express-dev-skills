const { updateSkill } = require("../controllers/skills");

const skills = [
    {id: 123, skill: 'HTML', done: true},
    {id: 234, skill: 'CSS', done: true},
    {id: 345, skill: 'JavaScript', done: true},
    {id: 456, skill: 'Python', done: false}
]

module.exports = {
    getSkills,
    showSkills,
    create,
    deleteOne, 
    update
}

function update(id, updateSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updateSkill);
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill =>skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function showSkills(id) {
  // URL params are strings - convert to a number    
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getSkills() {
    return skills;
}