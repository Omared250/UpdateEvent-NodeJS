/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { updateEvent } = require('../controller/updateEvent');
const router = Router();

router.put('/update', updateEvent )

module.exports = router;