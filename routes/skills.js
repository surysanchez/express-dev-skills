var express = require('express');
var router = express.Router();


var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);