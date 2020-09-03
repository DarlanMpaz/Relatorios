import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logonImage from '../../assets/vendas.png';
import logoImg from '../../assets/logo.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />
                <form>
                    <h1>Bem vindo, faça seu login.</h1>
                    <input placeholder="Seu código" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size="16" color="#c62430" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={logonImage} alt="Logon" />
        </div>
    );
}