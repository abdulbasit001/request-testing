import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FetchData } from "../Utils/Functions";

const Header = () => {
  const dispatch = useDispatch();
  const SearchNews = ({ target: { value } }) => {
    if (value.trim().length > 2) {
      FetchData(`v2/everything?q=${value}&`, dispatch, "articles");
    }
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">New API</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/">Source</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/top-headlines">Top Headlines</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={SearchNews}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
