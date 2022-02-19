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

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2"></Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Weather Forecast</Card.Title>
                <p className="card-category">Search by city name</p>
              </Card.Header>
              <Card.Body>
                <p>TEST</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </>
  );
};
