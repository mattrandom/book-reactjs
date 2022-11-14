import React from 'react';
import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Book from './components/Book';
import BookList from './components/BookList';

export default function App() {
  const marginTop = {
    marginTop: "10px"
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/add" element={<Book />} />
              <Route path="/list" element={<BookList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}
