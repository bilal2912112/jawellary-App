import React, { useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Message } from "../Message";
import { addToCart } from "../../actions/cartActions";

const Cartpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(`qty ${qty}`);
  return <div>Cartpage</div>;
};

export default Cartpage;
