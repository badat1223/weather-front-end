import { FunctionComponent, ReactElement, useState, useEffect } from "react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { WeatherSearch } from "../models/weather-search-model";
import { services } from "../services/services";

export const WeatherForecast: FunctionComponent = (): ReactElement => {
  const [weatherSearch, setWeatherSearch] = useState<WeatherSearch>();
  const [cityName, setCityName] = useState<string>("");
  const [typedValue, setTypedValue] = useState<string>("");

  const fetchWeatherData = async (city: string) => {
    const result = await services.getWeatherData(city);
    if (!!result) {
      setWeatherSearch(result.data);
    }
  };

  const onCitySearchChange = (event: any) => {
    setCityName(event.target.value);
    setTypedValue(event.target.value);
  };

  const handleClickSubmit = () => {
    fetchWeatherData(cityName);
    setTypedValue("");
  };

  useEffect(() => {
    console.log(weatherSearch);
  }, [weatherSearch]);

  return (
    <>
     
       
       
          <div className="col-12-xs col-6-md col-6-lg">
            <div className="card p-0">
              
                
                <h3 className="card-title m-1">Weather Forecast</h3>
                  <div className="content">
                    <p className="card-category">Search by city name</p>
                </div>
                
                  <Form className="card-body">
                    <div className="row">
                      <div className="col-6-md col-6-lg">
                      <Form.Group className="mb-6" controlId="cityInputSearch">
                        <Form.Control
                          type="text"
                          placeholder="Enter city name"
                          onChange={onCitySearchChange}
                          value={typedValue}
                        />
                      </Form.Group>
                      </div>
                      <div className="col-6-md col-6-lg">
                      <a
                        className="btn-outlined-secondary text-secondary text-hover-white "
                        
                        onClick={handleClickSubmit}
                      >
                        Submit
                      </a>
                      </div>
                    </div>
                  </Form>
                </div>
            
            </div>
          
          
        
      
    </>
  );
};
