const express = require('express');
const { getAllTasks, addTask, getImportantTasks, getMyDayTasks, getPlannedTasks, updateType } = require('../controllers/tasks');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getAllTasks)
router.post('/addTask', auth, addTask)
router.get('/important', auth, getImportantTasks)
router.get('/myDay', auth, getMyDayTasks)
router.get('/planned', auth, getPlannedTasks)
router.post('/update', auth, updateType)

module.exports = router;