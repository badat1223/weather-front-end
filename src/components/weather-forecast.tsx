import {
  FunctionComponent,
  ReactElement,
  useState,
  useEffect,
  ChangeEvent,
} from "react";

import {
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

import { WeatherSearch } from "../models/weather-search-model";

export const WeatherForecast: FunctionComponent = (): ReactElement => {
  const [weatherSearch, setWeatherSearch] = useState<WeatherSearch>();
  const [cityInput, setCityInput] = useState<string>("");
  const [typedValue, setTypedValue] = useState<string>("");

  const onCitySearchChange = (event: any) => {
    setCityInput(event.target.value);
    setTypedValue(event.target.value);
  };

  const handleTextSearch = () => {
    console.log("Submit: ", cityInput);
    setTypedValue("");
  };

  useEffect(() => {
    //console.log(cityInput);
  }, [cityInput, typedValue]);

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
                        onClick={handleTextSearch}
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
