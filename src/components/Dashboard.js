import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import truckIcon from "../assets/svgs/truckIcon.svg";
import docIcon from "../assets/svgs/docIcon.svg";
import pplIcon from "../assets/svgs/peopleIcon.svg";
import pieIcon from "../assets/svgs/pieIcon.svg";
import msgIcon from "../assets/svgs/messageIcon.svg";
import dashboardIcon from "../assets/svgs/DashboardIcon.svg";
import map from "../assets/png/map.png";
import activeIcon from "../assets/svgs/activeIcon.svg";
import packageIcon from "../assets/svgs/packageIcon.svg";
import { BsSearch } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Container fluid>
        <Row className="dashboard__row">
          <Col className="col-md-1 column1">
            <div className="icon__box mt-3">
              <img src={truckIcon} className="menuItem_icon" alt="" />
            </div>
            <div className="menuItems_col">
              <div className="mt-5">
                <img src={dashboardIcon} className="menuItem_icon" alt="" />
              </div>
              <div className="active_box">
                <img src={activeIcon} className="icon__active" alt="" />
              </div>
              <div>
                <img src={docIcon} className="menuItem_icon" alt="" />
              </div>
              <div>
                <img src={pplIcon} className="menuItem_icon" alt="" />
              </div>
              <div>
                <img src={pieIcon} className="menuItem_icon" alt="" />
              </div>
              <div>
                <img src={msgIcon} className="menuItem_icon" alt="" />
              </div>
            </div>
          </Col>

          <Col className="col-md-4">
            <div>
              <h3 className="header">GOCURIAR</h3>
            </div>
            <div className="has-search my-4">
              <BsSearch className="search__icon" />
              <Form.Control
                type="search"
                placeholder="Search tracking number"
                id="search"
              />
            </div>

            <div className="mb-4">
              <Button className="w-100 add_btn">+ Add Load</Button>{" "}
            </div>

            <div>
              <Card>
                <Card.Body>
                  <div className="card__header">
                    <div className="package_div me-3">
                      <img src={packageIcon} className="package_icon" alt="" />
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <span className="number">#657890</span>
                      <div>
                        <Badge pill id="pill__shape" text="dark">
                          On The Way
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="package__details py-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="body__text">Estimated Time</p>
                        <span className="time">03:50</span>{" "}
                        <span className="meridian">PM</span>
                      </div>
                      <div>
                        <span className="date">Dec 12,2023</span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <Row className="align-items-center">
                        <Col className="col-md-1 pe-0">
                          <div className="point__div">
                            <GoDotFill />
                          </div>
                        </Col>
                        <Col className="p-0">
                          <div className="line1"></div>
                        </Col>
                        <Col className="col-md-1 p-0 text-center">
                          <img
                            src={activeIcon}
                            className="icon__active"
                            alt=""
                          />
                        </Col>
                        <Col className="p-0">
                          <div className="line2"></div>
                        </Col>
                        <Col className="col-md-1 p-0">
                          <div className="location__div">
                            <IoLocationOutline />
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="location__details">
                      <div>
                        <p>206 Beach Blvd</p>
                        <span>Miami, FL, 32104</span>
                      </div>
                      <div>
                        <p>102 Collins Ave</p>
                        <span>Chicago, IL, 20090</span>
                      </div>
                    </div>
                  </div>

                  <div className="card_footer mt-2">
                    <div className="avatar__div me-3"></div>
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="person__details">
                        <span className="person__name">Saddam Ali</span> <br />
                        <span className="person__role">Recipient</span>
                      </div>
                      <div className="icons__div">
                        <div className="location__div tele__icon">
                          <BsTelephone />
                        </div>
                        <div className="location__div msg__icon">
                          <FaRegMessage />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="my-2">
              <Card>
                <Card.Body>
                  <div className="card2">
                    <div className="package_div me-3">
                      <img src={packageIcon} className="package_icon" alt="" />
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <span className="number">#540775</span>
                      <div>
                        <Badge pill id="package__badge" text="dark">
                          In Sorting Center
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="my-2">
              <Card>
                <Card.Body>
                  <div className="card2">
                    <div className="package_div me-3">
                      <img src={packageIcon} className="package_icon" alt="" />
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <span className="number">#201998</span>
                      <div>
                        <Badge pill id="pill__shape2" text="dark">
                          In Transit
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col className="col-md-7">
            <Card className="my-4">
              <Card.Body>
                <img src={map} alt="" className="map__img mb-2" />
                <div>
                  <Row>
                    <Col className="col-md-6">
                      <div>
                        <Card className="mb-3">
                          <Card.Body>
                            <Card.Title className="card__title">
                              Shipping Info
                            </Card.Title>
                            <div className="card__content1 border__bottom">
                              <div>
                                <p>Tracking number</p>
                                <span>#657890</span>
                              </div>
                              <div className="desc ps-3">
                                <p>Courier</p>
                                <span>DHL Express</span>
                              </div>
                              <div className="desc ps-3">
                                <p>Type</p>
                                <span>Furniture</span>
                              </div>
                            </div>
                            <div className="card__content1">
                              <div>
                                <p>Quantity</p>
                                <span>10 Package</span>
                              </div>
                              <div className="desc ps-3">
                                <p>Weight</p>
                                <span>55Kg</span>
                              </div>
                              <div className="desc ps-3">
                                <p>Price</p>
                                <span>$550.90</span>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card>
                          <Card.Body>
                            <Card.Title className="card__title">
                              Driver Info
                            </Card.Title>
                            <div className="card__content1 border__bottom">
                              <div className="card_footer mt-2 w-100">
                                <div className="avatar__div me-3"></div>
                                <div className="d-flex justify-content-between align-items-center w-100">
                                  <div>
                                    <span>Muhammed Ali</span> <br />
                                    <span>
                                      {" "}
                                      <GoDotFill className="go__online" />{" "}
                                      Online
                                    </span>
                                  </div>
                                  <div className="icons__div">
                                    <div
                                      className="location__div tele__icon"
                                      style={{
                                        backgroundColor: "transparent",
                                        border: `1px solid #000`,
                                      }}
                                    >
                                      <BsTelephone />
                                    </div>
                                    <div
                                      className="location__div msg__icon"
                                      style={{
                                        backgroundColor: "transparent",
                                        border: `1px solid #000`,
                                      }}
                                    >
                                      <FaRegMessage />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card__content1">
                              <div>
                                <p>Tracking Number</p>
                                <span>B 3129 KVK</span>
                              </div>
                              <div className="desc ps-3">
                                <p>Truck Type</p>
                                <span>Trailer Truck</span>
                              </div>
                              <div className="desc ps-3">
                                <p>Trailer Number</p>
                                <span>TN-32-40-5</span>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col className="col-md-6">
                      <Card>
                        <Card.Body>
                          <Card.Title className="card__title mb-3">
                            Route Details
                          </Card.Title>
                          <div className="route__row mb-5">
                            <div>
                              <div className="point__div">
                                <GoDotFill />
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Dec 9,2023</span>
                              <br />
                              <span className="route__time">08:00 AM</span>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Pick Up</span>
                              <br />
                              <span className="route__time">
                                206 Beach Blvd, Miami, FL, 32104
                              </span>
                            </div>
                          </div>
                          <div className="route__row mb-5">
                            <div>
                              <div className="point__div">
                                <GoDotFill />
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Dec 9,2023</span>
                              <br />
                              <span className="route__time">08:00 AM</span>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Transit</span>
                              <br />
                              <span className="route__time">
                                NW Ave, Coral Gables, FL, 19987
                              </span>
                            </div>
                          </div>
                          <div className="route__row mb-5">
                            <div>
                              <div className="point__div">
                                <GoDotFill />
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Dec 9,2023</span>
                              <br />
                              <span className="route__time">08:00 AM</span>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">
                                In Sorting Centre
                              </span>
                              <br />
                              <span className="route__time">
                                2711 Haskell Ave, Dallas, TX, 75204
                              </span>
                            </div>
                          </div>
                          <div className="route__row mb-5">
                            <div>
                              <div className="point__div">
                                <GoDotFill />
                                <div className="line"></div>
                              </div>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Dec 9,2023</span>
                              <br />
                              <span className="route__time">08:00 AM</span>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">On The Way</span>
                              <br />
                              <span className="route__time">
                                150 Travis St, Chicago, IL, 20185
                              </span>
                            </div>
                          </div>
                          <div className="route__row">
                            <div>
                              <div className="location__div">
                                <IoLocationOutline />
                              </div>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Dec 9,2023</span>
                              <br />
                              <span className="route__time">08:00 AM</span>
                            </div>
                            <div className="route__details1">
                              <span className="route__header">Delivered</span>
                              <br />
                              <span className="route__time">
                                102 Collins Ave, Chicago, IL, 20090
                              </span>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
