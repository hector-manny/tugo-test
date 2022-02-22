const { Router } = require('express');
const { Testget, Insert_test } = require('../controllers/habitaciones');

const router = Router();

router.get("/", Testget);
router.get("/insert", Insert_test);

module.exports = router;