import React from "react";
import { Card, Container, Row, Col, Image as RBImage } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css";

//  Mets ton prénom ici (si vide = Bonjour ! sans image)
const firstName = "Élie";

function App() {
  // Déterminer le texte de salutation et si l'image doit être affichée
  const greetingText = firstName ? `Bonjour, ${firstName} !` : "Bonjour !";
  const showImage = !!firstName; // Convertir en booléen

  return (
    <div className="app-container">
      {/* Message de salutation stylisé en haut à droite */}
      <div className={`greeting-badge ${showImage ? "greeting-badge-name" : "greeting-badge-default"}`}>
        <h4 className="m-0">{greetingText}</h4>
        {showImage && (
          <RBImage
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="avatar"
            className="avatar-badge"
          />
        )}
      </div>

      <Container fluid className="d-flex justify-content-center align-items-center h-100">
        <Row>
          <Col>
            {/*  Carte produit améliorée */}
            <Card className="product-card">
              <Image />
              <Card.Body>
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;