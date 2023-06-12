/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { updateEvent } = require('../controller/updateEvent');
const router = Router();

router.put('/', updateEvent )

module.exports = router;