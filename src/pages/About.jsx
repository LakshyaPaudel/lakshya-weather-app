import "./About.css";

function About() {
  return (
    <div className="about-container">

      {/* Header */}

      <section className="about-hero">

        <div className="about-icon">
          🌤️
        </div>

        <h1>About WeatherNow</h1>

        <p>
          WeatherNow is a React-based weather application designed
          to provide real-time weather information in a simple,
          attractive, and user-friendly interface.
        </p>

      </section>


      {/* Project Idea */}

      <section className="about-section">

        <h2>💡 Project Idea</h2>

        <p>
          The main idea behind WeatherNow is to create a weather
          application that allows users to select a city and
          immediately view its current weather conditions.
        </p>

        <p>
          Instead of displaying only temperature, the application
          provides useful information such as humidity, wind speed,
          atmospheric pressure, visibility, sunrise, sunset, and
          the current weather condition.
        </p>

        <p>
          The application also changes its visual atmosphere based
          on the actual weather returned by the weather API. For
          example, rainy weather produces a rainy background while
          clear weather produces a brighter atmosphere.
        </p>

      </section>


      {/* Technologies */}

      <section className="about-section">

        <h2>💻 Technologies Used</h2>

        <div className="technology-grid">

          <div className="technology-card">
            <div>⚛️</div>
            <h3>React</h3>
            <p>
              Used to build the user interface and divide the
              application into reusable components and pages.
            </p>
          </div>


          <div className="technology-card">
            <div>🟨</div>
            <h3>JavaScript</h3>
            <p>
              Used for application logic, API communication,
              state management, event handling, and dynamic
              weather information.
            </p>
          </div>


          <div className="technology-card">
            <div>🎨</div>
            <h3>CSS3</h3>
            <p>
              Used to design the interface, responsive layouts,
              animations, themes, weather effects, cards, and
              navigation bar.
            </p>
          </div>


          <div className="technology-card">
            <div>🌐</div>
            <h3>OpenWeatherMap API</h3>
            <p>
              Provides real-time weather data including
              temperature, humidity, wind, pressure, visibility,
              weather conditions, sunrise, and sunset.
            </p>
          </div>


          <div className="technology-card">
            <div>📦</div>
            <h3>Axios</h3>
            <p>
              Used to send HTTP requests to the OpenWeatherMap
              API and retrieve weather information.
            </p>
          </div>


          <div className="technology-card">
            <div>⚡</div>
            <h3>Vite</h3>
            <p>
              Used as the development environment and build tool
              for the React application.
            </p>
          </div>


          <div className="technology-card">
            <div>🧭</div>
            <h3>React Router</h3>
            <p>
              Used to create separate Home, About, and Contact
              pages without reloading the entire application.
            </p>
          </div>


          <div className="technology-card">
            <div>💾</div>
            <h3>Local Storage</h3>
            <p>
              Used to remember the user's preferred temperature
              unit and website theme.
            </p>
          </div>

        </div>

      </section>


      {/* React Concepts */}

      <section className="about-section">

        <h2>⚛️ React Concepts Used</h2>

        <div className="concept-list">

          <div>
            <strong>useState()</strong>
            <p>
              Used to store city, weather data, temperature unit,
              loading state, and error information.
            </p>
          </div>


          <div>
            <strong>useEffect()</strong>
            <p>
              Used to automatically request new weather data when
              the selected city or temperature unit changes.
            </p>
          </div>


          <div>
            <strong>Components</strong>
            <p>
              Navbar, Home, About, and Contact are separated into
              reusable React components.
            </p>
          </div>


          <div>
            <strong>React Router</strong>
            <p>
              Allows users to navigate between different pages
              using routes such as /, /about, and /contact.
            </p>
          </div>


          <div>
            <strong>Conditional Rendering</strong>
            <p>
              Weather information, loading messages, errors, and
              weather effects are displayed according to application
              state.
            </p>
          </div>

        </div>

      </section>


      {/* How It Works */}

      <section className="about-section">

        <h2>🔄 How WeatherNow Works</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h3>Select a City</h3>
            <p>
              The user selects a city from the dropdown menu.
            </p>
          </div>


          <div className="step">
            <span>2</span>
            <h3>Send API Request</h3>
            <p>
              Axios sends a request to the OpenWeatherMap API.
            </p>
          </div>


          <div className="step">
            <span>3</span>
            <h3>Receive Weather Data</h3>
            <p>
              The API returns current weather information.
            </p>
          </div>


          <div className="step">
            <span>4</span>
            <h3>Update React State</h3>
            <p>
              React stores the received information using
              useState().
            </p>
          </div>


          <div className="step">
            <span>5</span>
            <h3>Display Weather</h3>
            <p>
              The application displays the weather information
              and changes the background according to the condition.
            </p>
          </div>

        </div>

      </section>


      {/* Features */}

      <section className="about-section">

        <h2>✨ Main Features</h2>

        <div className="feature-grid">

          <div>🌡️ Real-time temperature</div>
          <div>🌧️ Weather condition</div>
          <div>💧 Humidity</div>
          <div>💨 Wind speed</div>
          <div>🌡️ Atmospheric pressure</div>
          <div>👁️ Visibility</div>
          <div>🌅 Sunrise & sunset</div>
          <div>🌙 Dark & light theme</div>
          <div>🌧️ Dynamic weather background</div>
          <div>📱 Responsive design</div>
          <div>🌍 Multiple cities</div>
          <div>🌡️ Celsius & Fahrenheit</div>

        </div>

      </section>


      {/* Future Improvements */}

      <section className="about-section">

        <h2>🚀 Future Improvements</h2>

        <ul className="future-list">

          <li>
            Add a 5-day weather forecast.
          </li>

          <li>
            Add automatic location detection.
          </li>

          <li>
            Add weather search for any city in the world.
          </li>

          <li>
            Add hourly weather forecasts.
          </li>

          <li>
            Add weather alerts and notifications.
          </li>

          <li>
            Add charts for temperature and humidity.
          </li>

          <li>
            Add animated clouds, sun, rain, and snow.
          </li>

          <li>
            Improve accessibility and mobile experience.
          </li>

        </ul>

      </section>


      {/* Conclusion */}

      <section className="about-final">

        <h2>🌍 Why WeatherNow?</h2>

        <p>
          WeatherNow combines real-time weather data with modern
          web development techniques. The project demonstrates
          how React, JavaScript, APIs, CSS, routing, state
          management, and browser storage can work together to
          create a complete interactive web application.
        </p>

      </section>

    </div>
  );
}

export default About;