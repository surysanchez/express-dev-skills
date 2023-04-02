var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


// GET /skills/new
router.get('/new', skillsCtrl.new)

// GET /index
router.get('/', skillsCtrl.index);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

//GET /skills/create
router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

// GET / skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);

// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;