const questions = [
  { question: "What type of food are you craving?", options: ["Spicy", "Sweet", "Savory"] },
  { question: "Are you vegetarian?", options: ["Yes", "No"] },
  { question: "How much time do you have?", options: ["Quick snack", "Proper meal"] },
  { question: "Hot or cold dish?", options: ["Hot", "Cold"] },
  { question: "Sweet or salty?", options: ["Sweet", "Salty"] },
  { question: "Time of day?", options: ["Breakfast", "Lunch", "Dinner", "Snack"] },
  { question: "What cuisine do you want?", options: ["Indian", "Italian", "Chinese", "Mexican"] },
  { question: "Street food or restaurant-style?", options: ["Street food", "Fine dining"] },
  { question: "Any specific ingredient?", options: ["Cheese", "Chocolate", "Paneer", "Rice"] },
  { question: "Budget range?", options: ["Low", "Medium", "High"] }
];

// 10 Food Suggestions 🍲
const foods = [
  {
    name: "Paneer Tikka",
    type: "Spicy", cuisine: "Indian", diet: "Yes",
    description: "Grilled paneer cubes marinated in yogurt & spices.",
    ingredients: "Paneer, Yogurt, Spices, Bell Peppers",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-tikka.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Chocolate Lava Cake",
    type: "Sweet", cuisine: "Dessert", diet: "Yes",
    description: "Rich chocolate cake with a molten lava center.",
    ingredients: "Chocolate, Flour, Butter, Sugar, Eggs",
    image: "https://static.toiimg.com/thumb/53096885.cms?imgsize=152251&width=800&height=800",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Spaghetti Aglio e Olio",
    type: "Savory", cuisine: "Italian", diet: "Yes",
    description: "Classic pasta with olive oil, garlic, and chili flakes.",
    ingredients: "Spaghetti, Olive Oil, Garlic, Chili Flakes",
    image: "images/spagetti.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Momos",
    type: "Spicy", cuisine: "Chinese", diet: "Yes",
    description: "Steamed dumplings filled with vegetables or chicken.",
    ingredients: "Flour, Veggies/Chicken, Soy Sauce, Garlic",
    image: "images/momos.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Nachos",
    type: "Savory", cuisine: "Mexican", diet: "Yes",
    description: "Crispy nachos topped with cheese, salsa, and jalapeños.",
    ingredients: "Tortilla chips, Cheese, Salsa, Jalapeños",
    image: "images/nachos.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Cheese Burger",
    type: "Savory", cuisine: "American", diet: "No",
    description: "Juicy beef patty with melted cheese and sauces.",
    ingredients: "Bun, Beef Patty, Cheese, Lettuce, Sauce",
    image: "images/burger.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Samosa",
    type: "Spicy", cuisine: "Indian", diet: "Yes",
    description: "Fried pastry filled with spiced potatoes & peas.",
    ingredients: "Flour, Potato, Peas, Spices",
    image: "images/samosa.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Pav Bhaji",
    type: "Spicy", cuisine: "Indian", diet: "Yes",
    description: "Mashed vegetables cooked with spices & buttered pav.",
    ingredients: "Potato, Tomato, Peas, Butter, Pav Bread",
    image: "images/bhaji.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Ice Cream Sundae",
    type: "Sweet", cuisine: "Dessert", diet: "Yes",
    description: "Layered ice cream with syrup, nuts, and whipped cream.",
    ingredients: "Ice Cream, Chocolate Syrup, Nuts, Cream",
    image: "images/sundae.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  },
  {
    name: "Fried Rice",
    type: "Savory", cuisine: "Chinese", diet: "Yes",
    description: "Stir-fried rice with veggies, soy sauce, and spices.",
    ingredients: "Rice, Vegetables, Soy Sauce, Garlic",
    image: "images/friedrice.jpg",
    zomato: "https://www.zomato.com",
    swiggy: "https://www.swiggy.com"
  }
];

let currentQuestion = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const foodSuggestions = document.getElementById("foodSuggestions");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(btn, opt);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(btn, answer) {
  answers[currentQuestion] = answer;
  Array.from(optionsEl.children).forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

nextBtn.addEventListener("click", () => {
  if (!answers[currentQuestion]) {
    alert("Please select an option first!");
    return;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  document.querySelector(".quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const matchedFoods = foods.filter(f =>
    answers.includes(f.type) || answers.includes(f.cuisine) || answers.includes(f.diet)
  );

  foodSuggestions.innerHTML = matchedFoods.map(f => `
    <div class="food-card">
      <img src="${f.image}" alt="${f.name}">
      <h3>${f.name}</h3>
      <p><strong>Ingredients:</strong> ${f.ingredients}</p>
      <p>${f.description}</p>
      <div class="food-links">
        <a href="${f.zomato}" target="_blank">Find on Zomato</a> |
        <a href="${f.swiggy}" target="_blank">Find on Swiggy</a>
      </div>
    </div>
  `).join("");
}

showQuestion();
