import React from 'react';

import './styles.css';

export default function Logon() {
    return (
<<<<<<< HEAD
        <h1>Hello World</h1>
=======
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID" />
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
>>>>>>> parent of a0e3a84... feat(login): adds a styles on login page
    )
}