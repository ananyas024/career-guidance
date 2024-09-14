const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your own URI)
mongoose
  .connect(
    "mongodb+srv://saidevmakanur2004:saidev2007@saidev.rsigyav.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  app.post('/api/personality-test', (req, res) => {
    const answers = req.body.answers;
    // Handle storing the answers in the database here
    console.log('Received answers:', answers);
    
    // Simulate a result based on the answers (you can implement your own logic)
    const result = 'Personality Type: ExampleType'; 
  
    // Send the result back to the client
    res.json({ result });
  });

// Define Routes
app.use("/api/career-path", require("./routes/careerPathRoutes"));
app.use("/api/personality-test", require("./routes/personalityTestRoutes"));
app.use("/api/ar-experience", require("./routes/arExperienceRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
