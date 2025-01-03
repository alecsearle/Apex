const User = require("../models/user.model");

module.exports = {
  // Handle GET request for /user
  get: (req, res) => {
    res.send("User: Test User");
  },

  // Handle POST request for /user
  post: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Create a new User instance
      const newUser = new User({ username, email, password });

      // Validate the User instance
      const errors = newUser.validateSync();
      if (errors) {
        return res.status(422).send(errors);
      }

      // Save the new user to the database
      await newUser.save();
      res.status(201).send("Successfully registered user");
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).send("An error occurred while registering the user.");
    }
  },
};
