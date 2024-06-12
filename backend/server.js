// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/contactForm', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// const contactSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     message: String,
// });

// const Contact = mongoose.model('Contact', contactSchema);

// app.post('/api/contact', async (req, res) => {
//     const { name, email, message } = req.body;
//     const newContact = new Contact({ name, email, message });

//     try {
//         await newContact.save();
//         res.status(201).send('Contact information saved.');
//     } catch (error) {
//         res.status(400).send('Error saving contact information.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const json2xls = require('json2xls');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(json2xls.middleware);

app.post('/api/contact', (req, res) => {
    const formData = req.body;

    // Save data to a JSON file
    fs.writeFile('contact_data.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error('Error saving JSON file:', err);
            return res.status(500).send('Error saving JSON file');
        }
    });

    // Save data to an Excel file
    const xls = json2xls([formData]);
    fs.writeFileSync('contact_data.xlsx', xls, 'binary', (err) => {
        if (err) {
            console.error('Error saving Excel file:', err);
            return res.status(500).send('Error saving Excel file');
        }
    });

    res.send('Form data saved successfully');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
