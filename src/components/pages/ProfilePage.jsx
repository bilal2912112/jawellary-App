import React, { useState, useEffect } from "react";
import {
  Link,
  redirect,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { getUserDetails } from "../../actions/userActions";

const ProfilePage = () => {
  return (
    <Row>
      <Col md={3}>
        <h2>UserProfile</h2>
      </Col>
      <Col md={9}>
        <h2>My Order</h2>
      </Col>
    </Row>
  );
};

export default ProfilePage;
