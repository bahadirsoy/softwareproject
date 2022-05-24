//import styles
import './mainpage.styles.css'

//import react bootstrap
import Carousel from 'react-bootstrap/Carousel'

//import components
import Navbar from '../../components/navbar/navbar.component';

function MainPage(){
    return(
        <>
            <Navbar></Navbar>

            <div className="main">
                <span className="popularActivities">
                    <h1 className="header mb10"> Popular Activities </h1>
                    
                    <div className="slidesContainer">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../images/imgMovie1.png')}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../images/müze.jpg')}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require('../../images/tolga.jpg')}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </span>

                <span className="specialForYou">
                    <h1 className="header"> Special For You </h1>
                    
                    <div className="line1">
                        <a href=""> <img src={require('../../images/4.jpg')} className="specials"/> </a>
                        <a href=""> <img src={require('../../images/3.jpg')} className="specials"/> </a>
                        <a href=""> <img src={require('../../images/movie2.jpg')} className="specials"/> </a>
                    </div>
                    
                    <div className="line2">
                        <a href=""> <img src={require('../../images/örümcek.jpg')} className="specials"/> </a>
                        <a href=""> <img src={require('../../images/matrix.jpg')} className="specials"/> </a>
                        <a href=""> <img src={require('../../images/müze.jpg')} className="specials"/> </a>
                    </div>
                </span>
            </div>
        </>
    )
}

export default MainPage;