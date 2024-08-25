const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// POST /bfhl
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
  const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || null;

  const response = {
    is_success: true,
    user_id: 'Shivam_Kumar_03022002', // replace with your details
    email: 'shivamm.kumar2021d@vitstudent.ac.in', // replace with your email
    roll_number: '21BPS1039', // replace with your roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  };

  res.json(response);
});


app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
