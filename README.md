# Flavor App

Flavor is a web application that allows users to generate recipes for dishes based on the ingredients they select. It utilizes Google's Gemini Generative API to generate recipes and provides nutritional content for each selected item.

## Features

- **Recipe Generation**: Users can select ingredients from a list, and the app generates recipes for dishes incorporating those ingredients using Google's Gemini Generative API.
- **Nutritional Content**: The app displays the nutritional content of each selected ingredient, providing users with insights into their meal's nutritional value.
- **React Frontend**: The frontend of the app is built using React.js, providing a dynamic and responsive user interface.
- **Node.js Backend**: The backend is implemented using Node.js and serves as a server for handling API requests and interactions with Google's Gemini API.
- **Easy to Run**: Flavor comes with simple steps to set up and run the app locally on your machine.

## Getting Started

To run the Flavor app locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/akaditya394/dataneuronassignment.git
   ```

2. Navigate to the project directory:

3. Install dependencies for the frontend and backend:

   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd ..
   cd server
   npm install
   ```

### Running the App

1. Start the Node.js backend server:

   ```bash
   # From the server directory
   npm start
   ```

2. Start the React frontend:

   ```bash
   npm run start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the Flavor app.

## Usage

1. Upon accessing the app, you will see a list of ingredients.
2. Select the ingredients you want to include in your recipe.
3. Click on the "Generate Recipe" button.
4. The app will use Google's Gemini API to generate a recipe incorporating the selected ingredients.
5. Nutritional content for each ingredient will be displayed along with the recipe.

## License

The Flavor app is open-source and available under the [MIT License](LICENSE). Feel free to modify and distribute the code as per the terms of the license.

---
