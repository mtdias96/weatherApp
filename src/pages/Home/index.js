import { useState } from 'react';
import Header from '../../components/Header';
import { Input } from '../../components/Input';
import WeatherDetails from '../../components/WeatherDetails';
import WeatherDisplay from '../../components/WeatherDisplay';
import WeatherService from '../../service/WeatherService';

import arrow from '../../assets/images/icons/arrow.svg';

import {
  Container,
  ContainerInput,
  ContainerWeather,
  InitalContainerText, InitialContent, WeatherContainer, WeatherContainerInfo,
} from './styles';

export default function Home() {
  const [city, setCity] = useState();
  const [search, setSearch] = useState();
  const [weatherText, setWeatherText] = useState('');
  const [temperature, setTemperature] = useState('');
  const [temperatureMin, setTemperatureMin] = useState('');
  const [temperatureMax, setTemperatureMax] = useState('');
  const [thermalSensation, setThermalSensation] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [UVIndex, setUVIndex] = useState('');
  const [probability, setProbability] = useState('');
  const [date, setDate] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const [iconTemperature, setIconTemperature] = useState(0);
  const [APIKey] = useState('Ef1BbIGZze1E3A63TuGTijtDxTBAcP1w');

  const handleCityName = (event) => {
    setCity(event.target.value);
  };

  const getDataWeather = async () => {
    const cityKeyValue = await WeatherService.getCityKey(city, APIKey);
    const infosList = await WeatherService.listInfos(cityKeyValue, APIKey);
    const probalityInfo = await WeatherService.probalityInfo(cityKeyValue, APIKey);
    const citySearch = await WeatherService.getCityName(city, APIKey);
    setSearch(citySearch[0].LocalizedName);
    setWeatherText(infosList[0].WeatherText);
    setTemperature(infosList[0].Temperature.Metric.Value);
    setThermalSensation(infosList[0].RealFeelTemperature.Metric.Value);
    setWindSpeed(infosList[0].Wind.Speed.Metric.Value);
    setHumidity(infosList[0].RelativeHumidity);
    setUVIndex(infosList[0].UVIndex);
    setDate(infosList[0].LocalObservationDateTime);
    setIsDay(infosList[0].IsDayTime);
    setIconTemperature(infosList[0].WeatherIcon);
    setProbability(probalityInfo.DailyForecasts[0].Day.RainProbability);
    setTemperatureMin(probalityInfo.DailyForecasts[0].RealFeelTemperature.Minimum.Value);
    setTemperatureMax(probalityInfo.DailyForecasts[0].RealFeelTemperature.Maximum.Value);
  };

  return (
    <Container>
      <Header />
      <InitialContent>
        <InitalContainerText>
          <h2>
            Boas vindas ao
            <span> TypeWeather</span>
          </h2>
          <p>Escolha um local para ver a previsão do tempo</p>
        </InitalContainerText>
        <ContainerInput>
          <Input
            type="text"
            placeholder="Buscar local"
            value={city}
            onChange={handleCityName}
          />
          <button type="button" onClick={getDataWeather}>
            <img src={arrow} alt="Enviar" />
          </button>
        </ContainerInput>
      </InitialContent>

      {date && (
        <ContainerWeather>
          <WeatherContainer>
            <WeatherDisplay
              city={search}
              temperature={temperature}
              weatherText={weatherText}
              temperatureMin={temperatureMin}
              temperatureMax={temperatureMax}
              dateApi={date}
              isDay={isDay}
              icon={iconTemperature}
            />
          </WeatherContainer>

          <WeatherContainerInfo>
            <WeatherDetails
              thermalSensation={thermalSensation}
              windSpeed={windSpeed}
              humidity={humidity}
              UVIndex={UVIndex}
              probability={probability}
            />
          </WeatherContainerInfo>
        </ContainerWeather>
      )}

    </Container>
  );
}
