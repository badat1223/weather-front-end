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
      <Container fluid>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <div className="card-layout">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Weather Forecast</Card.Title>
                  <div className="content">
                    <p className="card-category">Search by city name</p>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Form.Group className="mb-6" controlId="cityInputSearch">
                        <Form.Control
                          type="text"
                          placeholder="Enter city name"
                          onChange={onCitySearchChange}
                          value={typedValue}
                        />
                      </Form.Group>
                      <Button
                        className="mb-6"
                        variant="primary"
                        onClick={handleClickSubmit}
                      >
                        Submit
                      </Button>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
};
