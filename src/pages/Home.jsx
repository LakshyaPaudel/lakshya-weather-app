import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";

const apikey = "ca6c0eaa25c75a08a5c2a8610369df2a";

export default function Home() {
  const [city, setCity] = useState("Kathmandu");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState(
    localStorage.getItem("unit") || "metric"
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeatherData(city);
  }, [city, unit]);

  const fetchWeatherData = async (selectedCity) => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apikey}&units=${unit}`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Unable to load weather information.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnitChange = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";

    setUnit(newUnit);
    localStorage.setItem("unit", newUnit);
  };

  /* ==========================================
     GET ACTUAL WEATHER CONDITION
  ========================================== */

  const getWeatherClass = () => {
    if (!weatherData) return "weather-default";

    const condition = weatherData.weather[0].main.toLowerCase();

    if (condition.includes("clear")) {
      return "weather-clear";
    }

    if (condition.includes("cloud")) {
      return "weather-clouds";
    }

    if (
      condition.includes("rain") ||
      condition.includes("drizzle")
    ) {
      return "weather-rain";
    }

    if (condition.includes("thunderstorm")) {
      return "weather-storm";
    }

    if (condition.includes("snow")) {
      return "weather-snow";
    }

    if (
      condition.includes("mist") ||
      condition.includes("fog") ||
      condition.includes("haze")
    ) {
      return "weather-fog";
    }

    return "weather-default";
  };

  /* ==========================================
     CHECK DAY OR NIGHT USING REAL SUNRISE
     AND SUNSET DATA
  ========================================== */

  const isDaytime = () => {
    if (!weatherData) return true;

    const currentTime = weatherData.dt;
    const sunrise = weatherData.sys.sunrise;
    const sunset = weatherData.sys.sunset;

    return currentTime >= sunrise && currentTime < sunset;
  };

  /* ==========================================
     GET VISUAL BACKGROUND CLASS
  ========================================== */

  const getVisualWeatherClass = () => {
    if (!weatherData) return "weather-default";

    const condition = weatherData.weather[0].main.toLowerCase();

    /* CLEAR WEATHER */

    if (condition.includes("clear")) {
      return isDaytime() ? "clear-day" : "clear-night";
    }

    /* HAZE / MIST / FOG */

    if (
      condition.includes("haze") ||
      condition.includes("mist") ||
      condition.includes("fog")
    ) {
      return "hazy-weather";
    }

    /* CLOUDS */

    if (condition.includes("cloud")) {
      return "cloudy-weather";
    }

    /* RAIN */

    if (
      condition.includes("rain") ||
      condition.includes("drizzle")
    ) {
      return "rainy-weather";
    }

    /* THUNDERSTORM */

    if (condition.includes("thunderstorm")) {
      return "storm-weather";
    }

    /* SNOW */

    if (condition.includes("snow")) {
      return "snowy-weather";
    }

    return "weather-default";
  };

  const weatherClass = getWeatherClass();
  const visualWeatherClass = getVisualWeatherClass();

  return (
    <div
      className={`home ${weatherClass} ${visualWeatherClass}`}
    >

      {/* ==========================================
          CLEAR DAY SUN
      ========================================== */}

      {weatherData &&
        visualWeatherClass === "clear-day" && (
          <div className="weather-sun"></div>
        )}

      {/* ==========================================
          CLEAR NIGHT STARS + MOON
      ========================================== */}

      {weatherData &&
        visualWeatherClass === "clear-night" && (
          <>
            <div className="weather-stars"></div>
            <div className="weather-moon"></div>
          </>
        )}

      {/* ==========================================
          CLOUDS FOR CLOUDY WEATHER
      ========================================== */}

      {weatherData &&
        visualWeatherClass === "cloudy-weather" && (
          <div className="thick-clouds">
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="cloud cloud-4"></div>
          </div>
        )}

      {/* ==========================================
          THICK CLOUDS FOR HAZY WEATHER
      ========================================== */}

      {weatherData &&
        visualWeatherClass === "hazy-weather" && (
          <div className="thick-clouds">
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="cloud cloud-4"></div>
          </div>
        )}

      {/* ==========================================
          RAIN EFFECT
      ========================================== */}

      {weatherClass === "weather-rain" && (
        <div className="rain-effect">
          {Array.from({ length: 40 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
      )}

      {/* ==========================================
          SNOW EFFECT
      ========================================== */}

      {weatherClass === "weather-snow" && (
        <div className="snow-effect">
          {Array.from({ length: 35 }).map((_, index) => (
            <span key={index}>❄</span>
          ))}
        </div>
      )}

      {/* ==========================================
          STORM EFFECT
      ========================================== */}

      {weatherClass === "weather-storm" && (
        <div className="storm-effect"></div>
      )}

      {/* ==========================================
          MAIN WEATHER CONTENT
      ========================================== */}

      <div className="home-container">

        {/* HEADER */}

        <div className="home-header">
          <h1>WeatherNow</h1>

          <p>
            Real-time weather information for your selected city
          </p>
        </div>

        {/* CONTROLS */}

        <div className="weather-controls">

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Biratnagar">Biratnagar</option>
            <option value="gaighat">Gaighat</option>
            <option value="Janakpur">Janakpur</option>
            <option value="Dubai">Dubai</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
            <option value="Paris">Paris</option>
            <option value=" Rome">Rome</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Beijing">Beijing</option>
            <option value="Moscow">Moscow</option>
          </select>

          <button onClick={handleUnitChange}>
            {unit === "metric"
              ? "🌡️ Celsius"
              : "🌡️ Fahrenheit"}
          </button>

        </div>

        {/* LOADING */}

        {loading && (
          <div className="loading">
            Loading weather...
          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* WEATHER BOARD */}

        {weatherData && !loading && (

          <div className="weather-board">

            {/* WEATHER TOP */}

            <div className="weather-top">

              <div>

                <p className="location-label">
                  Current Weather
                </p>

                <h2>
                  📍 {weatherData.name}
                </h2>

              </div>

              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt={weatherData.weather[0].description}
              />

            </div>

            {/* TEMPERATURE */}

            <div className="main-temperature">

              {Math.round(weatherData.main.temp)}

              <span>
                °{unit === "metric" ? "C" : "F"}
              </span>

            </div>

            {/* WEATHER DESCRIPTION */}

            <p className="weather-description">
              {weatherData.weather[0].description}
            </p>

            {/* FEELS LIKE */}

            <p className="feels-like">

              Feels like{" "}

              {Math.round(
                weatherData.main.feels_like
              )}

              °{unit === "metric" ? "C" : "F"}

            </p>

            {/* WEATHER DETAILS */}

            <div className="weather-details">

              <div className="weather-detail">

                <span>💧</span>

                <strong>
                  {weatherData.main.humidity}%
                </strong>

                <small>
                  Humidity
                </small>

              </div>

              <div className="weather-detail">

                <span>💨</span>

                <strong>
                  {weatherData.wind.speed}
                </strong>

                <small>
                  Wind Speed
                </small>

              </div>

              <div className="weather-detail">

                <span>🌡️</span>

                <strong>
                  {weatherData.main.pressure}
                </strong>

                <small>
                  Pressure
                </small>

              </div>

              <div className="weather-detail">

                <span>👁️</span>

                <strong>
                  {(weatherData.visibility / 1000).toFixed(1)} km
                </strong>

                <small>
                  Visibility
                </small>

              </div>

            </div>

            {/* SUNRISE / SUNSET */}

            <div className="sun-info">

              <div>

                🌅

                <strong>
                  Sunrise
                </strong>

                <span>

                  {new Date(
                    weatherData.sys.sunrise * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}

                </span>

              </div>

              <div>

                🌇

                <strong>
                  Sunset
                </strong>

                <span>

                  {new Date(
                    weatherData.sys.sunset * 1000
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}

                </span>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}