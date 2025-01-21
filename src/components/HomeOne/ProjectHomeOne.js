import React from 'react';

function ProjectHomeOne() {
    return (
        <>
            <section className="appie-project-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            <h3 className="title">
                                                Comece seu projeto com EVA.
                                            </h3>
                                            <p>Nós entraremos em contato apenas sobre este produto.</p>
                                            <form action="#" className="email-form">
                                                <input type="hidden" name="accessKey" value="3420cf37-5861-4204-ae15-817287048317"/>
                                                <input type="text" name="honeypot" style={{ display: 'none' }}/>

                                                <div className="input-box mt-30">
                                                    <input type="text" name="name" placeholder="Seu nome" required/>
                                                </div>
                                                <div className="input-box mt-30">
                                                    <input type="text" name="$empresa" placeholder="Sua empresa" required/>
                                                </div>
                                                <div className="input-box mt-30">
                                                    <input type="email" name="email" placeholder="Seu e-mail" required/>
                                                </div>

                                                <label>
                                                    <input type="checkbox" name="$receber_email" value="sim" required
                                                           data-namelabel="Ao selecionar esta caixa e enviar seus dados, nós entraremos em contato para garantir seu acesso à nossa plataforma e enviar as orientações necessárias."
                                                           aria-label="Ao selecionar esta caixa e enviar seus dados, nós entraremos em contato para garantir seu acesso à nossa plataforma e enviar as orientações necessárias."/>
                                                    Ao selecionar esta caixa e enviar seus dados, nós entraremos em contato para garantir seu acesso à nossa plataforma e enviar as orientações necessárias.
                                                </label>

                                                <div className="my-3">
                                                    <div className="loading" style={{ display: 'none' }}>Carregando...</div>
                                                    <div className="error-message" style={{ display: 'none' }}>Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.</div>
                                                    <div className="sent-message" style={{ display: 'none' }}>Sua mensagem foi enviada com sucesso.</div>
                                                </div>

                                                <button type="submit" className="btn btn-secondary mt-30">
                                                    Conheça agora!
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
