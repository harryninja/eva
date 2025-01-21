import React, { useState } from 'react';

function PricingHomeOne({ className }) {
    const [toggleSwitch, setSwitchValue] = useState(true);
    return (
        <>
            <section className={`appie-pricing-area pt-90 pb-90 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Escolha seu plano</h3>
                                <p>Escolha o plano que mais se adequa a seu projeto</p>
                            </div>
                            <ul
                                className="list-inline text-center switch-toggler-list"
                                role="tablist"
                                id="switch-toggle-tab"
                            >
                                <li className={`month ${toggleSwitch ? 'active' : ''}`}>
                                    <a href="#">Mensal</a>
                                </li>
                                <li>
                                    <label
                                        onClick={() => setSwitchValue(!toggleSwitch)}
                                        className={`switch ${toggleSwitch ? 'on' : 'off'}`}
                                    >
                                        <span className="slider round" />
                                    </label>
                                </li>
                                <li className={`year ${toggleSwitch === false ? 'active' : ''}`}>
                                    <a href="#">Anual</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tabed-content">
                        {toggleSwitch ? (
                            <div id="month">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Starter</h6>
                                                <div className="price-range">
                                                    <sup>R$</sup> <span>04</span>
                                                    <p>/mês</p>
                                                </div>
                                                <p>Tenha 14 dias gratuitos</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>

                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Escolher plano
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Pro</h6>
                                                <div className="price-range">
                                                    <sup>R$</sup> <span>16</span>
                                                    <p>/mês</p>
                                                </div>
                                                <p>Tenha mais espaço de memoria</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>

                                                    <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Suporte 24/7
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Escolher plano
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Enterprise</h6>
                                                <div className="price-range">
                                                    <sup>R$</sup> <span>27</span>
                                                    <p>/mês</p>
                                                </div>
                                                <p>Tenha acesso a tudo que a aplicação pode oferecer</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>

                                                    <li>
                                                        <i className="fal fa-check" /> Segurança de dados
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Suporte 24/7
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Escolher plano
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div id="year">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Starter</h6>
                                                <div className="price-range">
                                                    <sup>R$</sup> <span>32</span>
                                                    <p>/anual</p>
                                                </div>
                                                <p>Tenha 14 dias gratuitos</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>

                                                    <li>
                                                        <i className="fal fa-check" /> 15 GB cloud
                                                        storage
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Escolher plano
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                        <div className="pricing-one__single center">
                                            <div className="pricig-heading">
                                                <h6>Pro</h6>
                                                <div className="price-range">
                                                    <sup>R$</sup> <span>116</span>
                                                    <p>/anual</p>
                                                </div>
                                                <p>Tenha mais espaço de memoria</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                <li>
                                                        <i className="fal fa-check" /> 50 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Suporte 24/7
                                                    </li>

                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Escolher plano
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="pricing-rebon">
                                                <span>Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow animated fadeInRight">
                                        <div className="pricing-one__single">
                                            <div className="pricig-heading">
                                                <h6>Enterprise</h6>
                                                <div className="price-range">
                                                    <sup>R$</sup> <span>227</span>
                                                    <p>/anual</p>
                                                </div>
                                                <p>Tenha acesso a tudo que a aplicação pode oferecer</p>
                                            </div>
                                            <div className="pricig-body">
                                                <ul>
                                                <li>
                                                        <i className="fal fa-check" /> Segurança de dados
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> 100 GB cloud
                                                        storage
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-check" /> Suporte 24/7
                                                    </li>
                                                </ul>
                                                <div className="pricing-btn mt-35">
                                                    <a className="main-btn" href="#">
                                                        Escolher plano
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PricingHomeOne;
