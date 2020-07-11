const router = require('express').Router();

// Importing functions from thought controller
const { 
    getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts

// /api/thoughts/:id

// /api/thoughts/:userId

// /api/thoughts/:thoughtId/reactions

// /api/thoughts/:thoughtId/reactionId

module.exports = router;