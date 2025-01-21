import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import user from '../../assets/images/testimonial-user.png';

function TestimonialHomeOne() {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section className="appie-testimonial-area pt-100 pb-160" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Edil Dias</h5>
                                        <span>Studio Daus - Fábrica de Software</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                        O EVA Estratégia Visual Ágil foi um divisor de águas para nossa equipe! A ferramenta é super intuitiva e facilita a organização e acompanhamento do projeto. A integração da jornada do usuário com o backlog é um diferencial incrível que nos permite ter uma visão holística do trabalho.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Keven Rodrigues</h5>
                                        <span>LARI Leitor Avaliativo de Redação Individual - Startup</span>
                                    </div>
                                    <div className="text">
                                        <p>

                  Fica muito mais fácil para apresentar um pitch, para dizer o que é o seu produto, a pessoa entende visualmente, facilmente.

                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Victor Castelo Branco</h5>
                                        <span>OCCA - ICT</span>
                                    </div>
                                    <div className="text">
                                        <p>

                  A gente precisa encontrar esses objetivos e fragmentar em jornadas. A gente quer entregar valor para quem? E como é que a gente consegue melhorar essa experiência? O EVA está conseguindo fazer isso para a gente.

                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={user} alt="" />
                                        <h5 className="title">Rogério Alencar Filho</h5>
                                        <span>Keycore - Fábrica de Software</span>
                                    </div>
                                    <div className="text">
                                        <p>


                                        Como programador reconheço o valor imensurável de visualizar claramente o progresso e os objetivos do que estamos desenvolvendo. Isso transforma nosso trabalho de meros escritores de códigos para contribuidores essenciais na entrega de produtos com significado, alinhando nossas habilidades técnicas com a visão geral do projeto.


                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
