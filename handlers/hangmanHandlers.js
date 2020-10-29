const { words } = require("../data/words");

// write your handlers here...

const handleWord = (req, res) => {
  const { id } = req.params;
  const word = words.find((value) => value.id === id);
  if (!word) {
    res.status(400).json({
      status: 400,
      message: "Word not found.",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: word,
    });
  }
};

const handleRdmWord = (req, res) => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const { id, letterCount } = randomWord;
  res.status(200).json({
    status: 200,
    data: { id, letterCount },
  });
};
const handleLetter = (req, res) => {
  const { id, letter } = req.params;
  const object = words.find((value) => value.id === id);
  const word = object.word;
  const newArr = [];
  for (let i = 0; i < Number(object.letterCount); i++)
    if (letter.toLowerCase() === word[i].toLowerCase()) {
      newArr.push(true);
    } else {
      newArr.push(false);
    }
  if (letter.length > 1) {
    res.status(400).json({
      status: 400,
      message: "Please enter only 1 letter",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: newArr,
    });
  }
};
module.exports = {
  handleWord,
  handleRdmWord,
  handleLetter,
};
