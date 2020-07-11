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
router.route('/')
      .get(getAllThoughts)
      .post(createThought);

// /api/thoughts/:id
router.route('/:id')
      .get(getThoughtById)
      .put(updateThought)
      .delete(deleteThought); 

// /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions')
      .post(addReaction);

// /api/thoughts/:thoughtId/reactionId
router.route('/:id/reactions/:reactionId')
      .delete(deleteReaction);

module.exports = router;