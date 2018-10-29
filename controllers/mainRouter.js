const express = require('express');
const mainRouter = express.Router();

let applicationState = {

    venues: [

        { name: "AT&T Park", events: [] },
        { name: "Dolores Park", events: [] },
        { name: "Make School", events: [] }
    ]

}



/**
 * Returns a List of venues
 */
mainRouter.get('/venues', (req, res) => {
    return res.json(applicationState.venues);
})

module.exports = mainRouter;