const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

    exports.create = (req, res) => {
        if (!req.body.title) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
      
        const tutorial = {
          name: req.body.name,
          title: req.body.title,
          text: req.body.text,
          photo: req.body.photo,
        };
      
        // Save Tutorial in the database
        User.create(tutorial)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
      };
    
