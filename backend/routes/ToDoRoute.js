const {Router} = require('express');
const { getTodo, saveTodo, deleteTodo } = require('../controllers/ToDoController');

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.delete('/delete', deleteTodo);

module.exports = router;