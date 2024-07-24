import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Col, Row, Card } from "react-bootstrap";

const GetImage = () => {
    const [image, setImage] = useState("");
    const [result, setResult] = useState([]);

    const searchImages = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=qTlydUNoWNir7zRpZuGEEWFzZ1GEx-Fpn2VTVkFEc18`)
            .then((response) => {
                console.log(response.data);
                setResult(response.data.results);
            })
          
    }

    const imgStyle = {

        height: "40vh"
    }

    return (
        <>
            <Container>
                <div className="mb-3 text-center my-5 d-flex">
                    <Form.Control
                        type="text"
                        id="search"
                        placeholder="Search"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <Button variant="primary" className='mx-3' onClick={searchImages}>Search</Button>
                </div>
            </Container>

            <Container>
                <Row>
                    {result.map((actualData) => (
                        <Col md={3} key={actualData.id}>
                            {/* <img src={actualData.urls.regular} alt={actualData.description || "image"} className="img-fluid" /> */}
                            <Card className='mt-4'>
                                <Card.Img variant="top" src={actualData.urls.regular} className='img-fluid w-100 ' style={imgStyle} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "large" }}><span className='fw-bold' style={{ fontSize: "large" }}>User_Name:</span> {actualData.user.username}</Card.Title>
                                    <Card.Text>
                                        <span className='fw-bold '>Update Image:</span> {actualData.updated_at}
                                    </Card.Text>
                                    <Card.Text>
                                        {actualData.alt_description}
                                    </Card.Text>

                                    {/* <Button variant="primary"  target='_blank' >{actualData.links.download}</Button> */}

                                    <a href={actualData.links.download} className="btn btn-primary btn-sm" rel="noopener noreferrer">Download</a>
                                    <Card.Text>
                                        <br />
                                        <div className='d-flex'>
                                            <div className='icon'>
                                                <i className="fa-solid fa-heart" style={{ color: "#ff0505", marginLeft: "6px" }}></i>
                                                <div style={{ fontSize: "small" }}>{actualData.likes}</div>
                                            </div>
                                            <div className='icon mx-3'>

                                                <a href={actualData.user.portfolio_url}><i className="fa-brands fa-instagram" style={{ color: "#ff0ab1" }}></i></a>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* <Container>
                <Row>
                    {
                        result.map((actualData) => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={actualData.urls.regular} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                    })

                    }
                </Row>
            </Container> */}
        </>
    );
}

export default GetImage;
