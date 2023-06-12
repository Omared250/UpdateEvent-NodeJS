const { response } = require("express");
const Event = require('../models/Event');

const updateEvent = async( req, res = response ) => {

    const eventId = req.body.requestParam;
    const uid = req.body.requestUser;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Event do not exist with that Id'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No permissions to update this event'
            });
        }

        const newEvent = {
            ...req.body.requestBody,
            user: uid,
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        res.status(201).json({
            ok: true,
            event: updatedEvent
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Yous should contact admin'
        });
    }

};

module.exports = {
    updateEvent,
}