import React from 'react';
import profil from '../profil.jpg';
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export const About = () => {
    return (
        <Container>
            <h3>About me</h3>
            <Row className="mt-5">     
                <Col xs={6} md={4}>
                    <img src={profil} alt="Logo" width="170" height="170" />
                </Col>
                <Col className="ml-5" xs={6} md={6}>
                    <h4>Alfridus Dosinaen</h4>
                    <h6>6701160120</h6>
                    <h6>D3SI-43-02</h6>

                    <p className="mt-5">
                        Nama saya Alfridus, saya seorang mahasiswa di Telkom University. Saya mengambil jurusan Sistem Informasi. Saya berasal dari Flores Timur dan ini adalah tahun kedelapan saya tinggal di Bandung.
                    </p>
                </Col>
            </Row>
            <Link to="/" className="btn btn-danger mt-2 ml-2">Back</Link>
        </Container>
    )
}
