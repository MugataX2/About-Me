const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/intro', (req, res) => {
  res.json({
    success: true,
    nickname: 'เดียว',
    Name: 'ชลกร ศรีทองสุข',
    age: 17,
    hobbies: ['เล่นเกม', 'ฟังเพลง', 'ดีดกีต้าร์'],
    school: 'กรรณสูตศึกษาลัย',
    githubUsername: 'MugataX2'
  });
});

app.listen(3000, () => {
  console.log('Server started successfully');
});