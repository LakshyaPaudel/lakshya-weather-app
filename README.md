WeatherNow — React Weather Application

WeatherNow is a modern and responsive weather application built with React.js and Vite. It provides real-time weather information for selected cities using the OpenWeatherMap API.

The application displays current temperature, weather conditions, humidity, wind speed, atmospheric pressure, visibility, sunrise, and sunset information. It also dynamically changes its visual appearance according to the current weather condition and supports both light and dark themes.

🌐 Live Demo

Live Website:
https://lakshyapaudel.github.io/lakshya-weather-app/

GitHub Repository:
https://github.com/LakshyaPaudel/lakshya-weather-app

✨ Features
🌡️ Real-Time Weather Information

WeatherNow retrieves current weather information from the OpenWeatherMap API, including:

Current temperature
Feels-like temperature
Weather condition
Weather description
Humidity
Wind speed
Atmospheric pressure
Visibility
Sunrise time
Sunset time
🌍 Multiple Cities

Users can select different cities from the dropdown menu, including:

Kathmandu
Pokhara
Biratnagar
Gaighat
Janakpur
Dubai
London
New York
Tokyo
Sydney
Paris
Rome
New Delhi
Beijing
Moscow
🌡️ Celsius and Fahrenheit

Users can switch between:

Celsius (°C)
Fahrenheit (°F)

The selected temperature unit is saved using Local Storage, so the preference remains after refreshing the page.

🌙 Light and Dark Theme

The application provides a theme toggle that allows users to switch between:

☀️ Light theme
🌙 Dark theme

The selected theme is stored in Local Storage.

🌦️ Dynamic Weather Backgrounds

The application's background changes according to the actual weather condition.

Examples include:

☀️ Clear daytime
🌙 Clear nighttime
☁️ Cloudy weather
🌫️ Hazy weather
🌧️ Rainy weather
⛈️ Thunderstorm
❄️ Snow
🎨 Weather Visual Effects

WeatherNow includes CSS-based visual effects such as:

Animated rain
Falling snow
Moving clouds
Sun animation
Moon glow
Twinkling stars
Weather-specific gradients
📱 Responsive Design

The application is designed to work on:

💻 Desktop
💻 Laptop
📱 Mobile devices
📱 Tablets

Responsive CSS media queries are used to adapt the layout to smaller screen sizes.

🧭 Multiple Pages

The application uses React Router to provide separate pages:

🏠 Home
ℹ️ About
📩 Contact

The project uses HashRouter, which is suitable for deployment on GitHub Pages.

📩 Contact Form

The Contact page provides a simple form where users can enter:

Name
Email
Subject
Message

The form currently displays a confirmation message when submitted.

🛠️ Technologies Used
Technology	Purpose
React.js	Building the user interface
JavaScript	Application logic and functionality
Vite	Development server and build tool
Axios	Sending API requests
React Router DOM	Page navigation
CSS3	Styling and animations
OpenWeatherMap API	Real-time weather data
Local Storage	Saving theme and unit preferences
Git & GitHub	Version control and project hosting
GitHub Pages	Application deployment
⚛️ React Concepts Used

This project demonstrates several important React concepts.

useState()

Used to manage application data such as:

Selected city
Weather data
Temperature unit
Loading state
Error messages
Theme

Example:

const [city, setCity] = useState("Kathmandu");
const [weatherData, setWeatherData] = useState(null);
useEffect()

Used to automatically retrieve weather information whenever the selected city or temperature unit changes.

useEffect(() => {
  fetchWeatherData(city);
}, [city, unit]);
Components

The application is divided into reusable components and pages, including:

Navbar
Home
About
Contact
Conditional Rendering

Weather effects, loading messages, errors, and weather information are displayed conditionally depending on the application's state.

For example:

{loading && (
  <div className="loading">
    Loading weather...
  </div>
)}
React Router

React Router is used to navigate between:

/
 /about
 /contact
🔄 How the Application Works

The basic workflow of WeatherNow is:

User selects a city
        ↓
React updates the city state
        ↓
useEffect() detects the change
        ↓
Axios sends request to OpenWeatherMap
        ↓
Weather API returns current weather data
        ↓
React stores the data using useState()
        ↓
Weather information is displayed
        ↓
Background changes according to weather condition
📊 Weather Information Displayed

The main weather dashboard displays:

Current Weather
City name
Weather icon
Current temperature
Weather description
Feels-like temperature
Weather Details
💧 Humidity
💨 Wind speed
🌡️ Atmospheric pressure
👁️ Visibility
Sun Information
🌅 Sunrise
🌇 Sunset

The sunrise and sunset information is retrieved directly from the weather API.

📁 Project Structure

The project is organized approximately as follows:

lakshya-weather-app/
│
├── public/
│
├── src/
│   │
│   ├── Components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
⚙️ Installation

To run WeatherNow locally, follow these steps.

1. Clone the repository
git clone https://github.com/LakshyaPaudel/lakshya-weather-app.git
2. Navigate into the project
cd lakshya-weather-app
3. Install dependencies
npm install
4. Configure the OpenWeatherMap API

Create a .env file in the root directory:

VITE_WEATHER_API_KEY=your_api_key_here

Then use the environment variable in Home.jsx:

const apikey = import.meta.env.VITE_WEATHER_API_KEY;
Important

Do not commit your .env file to GitHub.

Add this to .gitignore:

.env
.env.local
🔑 Getting an OpenWeatherMap API Key

WeatherNow uses the OpenWeatherMap API to retrieve weather information.

You can create an account and obtain an API key from:

https://openweathermap.org/

After obtaining your key, add it to your .env file:

VITE_WEATHER_API_KEY=your_api_key_here
🚀 Running the Project

Start the development server:

npm run dev

Vite will provide a local development address similar to:

http://localhost:5173/

Open the address in your browser.

🏗️ Building for Production

To create a production build:

npm run build

The production files will be generated inside:

dist/

You can preview the production build with:

npm run preview
🌐 GitHub Pages Deployment

This project is configured for deployment to GitHub Pages.

The repository is:

LakshyaPaudel/lakshya-weather-app

The Vite configuration should use:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lakshya-weather-app/',
})

The project can be deployed using GitHub Actions.

The expected live URL is:

https://lakshyapaudel.github.io/lakshya-weather-app/
💾 Local Storage

WeatherNow uses browser Local Storage to remember user preferences.

Theme

The selected theme is stored using:

theme
Temperature Unit

The selected temperature unit is stored using:

unit

This allows the application to remember the user's preferences after refreshing the page.

🎨 Weather Visual System

The application determines the weather condition returned by OpenWeatherMap and assigns a corresponding CSS class.

For example:

Clear       → clear-day / clear-night
Clouds      → cloudy-weather
Rain        → rainy-weather
Drizzle     → rainy-weather
Thunderstorm → storm-weather
Snow        → snowy-weather
Mist        → hazy-weather
Fog         → hazy-weather
Haze        → hazy-weather

For clear weather, the application also checks the actual sunrise and sunset timestamps to determine whether it is currently day or night.

This allows the application to display different visual environments for:

☀️ Clear Day
        ↓
🌙 Clear Night
📱 Responsive Design

The application includes responsive layouts using CSS media queries.

The interface adjusts for different screen sizes.

For example:

@media (max-width: 768px) {
  /* Tablet and mobile adjustments */
}

and:

@media (max-width: 480px) {
  /* Small mobile adjustments */
}

On smaller screens:

Weather information changes layout
Weather controls become vertical
Weather cards use fewer columns
Weather icons become smaller
Sunrise and sunset information becomes vertically aligned
⚠️ Error Handling

The application includes error handling for failed API requests.

If weather information cannot be retrieved, the application displays:

Unable to load weather information.

A loading state is also displayed while the API request is being processed:

Loading weather...
🚀 Future Improvements

Several improvements could be added to WeatherNow in future versions.

Weather Features
🌤️ 5-day weather forecast
🕐 Hourly weather forecast
📍 Automatic location detection
🔎 Search for any city worldwide
⚠️ Weather alerts
🔔 Weather notifications
📊 Temperature charts
📈 Humidity charts
UI Improvements
🎨 More advanced weather animations
🌧️ Improved rain effects
❄️ Improved snow animations
☁️ More realistic clouds
📱 Improved mobile experience
♿ Better accessibility
🎨 More customizable themes
Technical Improvements
🔐 Better API key security
🧪 Add automated tests
⚡ Improve API request handling
🚀 Optimize application performance
📦 Improve component reusability
🧠 What I Learned

Through this project, I practiced and developed skills in:

React component development
React state management
useState() and useEffect()
React Router
REST API integration
Axios
JavaScript
Conditional rendering
Local Storage
CSS animations
Responsive web design
Dynamic UI updates
Error handling
Git and GitHub
Vite
GitHub Pages deployment

This project helped demonstrate how different frontend technologies can work together to create a complete interactive web application.

👨‍💻 Author

Lakshya Paudel

Bachelor of Information Technology Student

Nepal

GitHub

https://github.com/LakshyaPaudel

📄 License

This project is created for educational and learning purposes.

You are welcome to explore the source code and use the project as a reference for learning React, APIs, and frontend development.

⭐ If you found this project useful

Feel free to ⭐ star the repository and explore the source code.