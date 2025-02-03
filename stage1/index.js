require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  return digits.reduce((sum, d) => sum + Math.pow(d, digits.length), 0) === num;
};

const getProperties = (num) => {
  let properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number, 10);
  const properties = getProperties(num);
  const digitSum = num
    .toString()
    .split("")
    .reduce((sum, d) => sum + parseInt(d), 0);

  try {
    const funFactResponse = await axios.get(
      `http://numbersapi.com/${num}/math`
    );
    const funFact = funFactResponse.data;

    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum,
      fun_fact: "No fun fact available.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
