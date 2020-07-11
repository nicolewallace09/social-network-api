// Importing Thought and Comment models
const { Thought, Comment } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req,res) {
        Thought.find({})
            // sorting by id
            .sort({ _id: -1 })
            .then(dbthoughtData => res.json(dbthoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err); 
            }); 
    },

    // get thoughts by id 
    getThoughtbyId({ params }, res) {
        Thought.findOne({ _id: params.id })
        
    }
}