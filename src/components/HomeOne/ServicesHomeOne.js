import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                            Nossos diferencias
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Jornada</h4>
                            <p>
                            - O objetivo de cada público/persona
                            <br/>
- A jornada de usuário de cada um
<br/>
- E como eles interagem entre si!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={IconTwo} alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Entregas</h4>
                            <p>- Selecione os itens do backlog com o mouse
                                <br/>
 - Dê um nome e data para aquele conjunto
 <br/>
- Acompanhe destacando a visibilidade no roadmap ou apenas filtrando aquela entrega</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconThree} alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Backlog</h4>
                            <p>- Cada parte do backlog está diretamente relacionada a cada etapa da jornada do usuário
                                <br/>
 - Você constrói aquilo que o cliente vai usar
 <br/>
 - A evolução dos itens é visual e automática, você sabe o que está pronto</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={IconFour} alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Agilidade</h4>
                            <p>- Tenha um quadro kanban editável por sprint
                                <br/>
 - Veja suas tarefas separadas por funcionalidade/user story
 <br/>
 - Tenha sua evolução iterativa e incremental de forma simples e fácil</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
