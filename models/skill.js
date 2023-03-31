const skills = [
    {id: 123, skill: 'HTML', done: true},
    {id: 234, skill: 'CSS', done: true},
    {id: 345, skill: 'JavaScript', done: true},
    {id: 456, skill: 'Python', done: false}
]

module.exports = {
    getSkills,
    showSkills

}

function showSkills(id) {
  // URL params are strings - convert to a number    
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getSkills() {
    return skills;
}