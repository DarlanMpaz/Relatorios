import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Bem vindo(a), Darlan</span>
                <Link className="button" to="/vendas/nova">Registrar nova venda</Link>
                <button type="button">
                    <FiPower size={18} color="#c62430" />
                </button>
            </header>
            <h1>Vendas registradas - <span>02/09/2020</span></h1>
                <ul>
                    <li>
                        <strong>Cliente:</strong>
                        <p>Darlan Paz</p>

                        <strong>Valor da venda:</strong>
                        <p>R$ 24,90</p>

                        <strong>Forma de pagamento:</strong>
                        <p>À vista</p>

                        <strong>Forma de entrega:</strong>
                        <p>T10 - R$10,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>Cliente:</strong>
                        <p>Darlan Paz</p>

                        <strong>Valor da venda:</strong>
                        <p>R$ 24,90</p>

                        <strong>Forma de pagamento:</strong>
                        <p>À vista</p>

                        <strong>Forma de entrega:</strong>
                        <p>T10 - R$10,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>Cliente:</strong>
                        <p>Darlan Paz</p>

                        <strong>Valor da venda:</strong>
                        <p>R$ 24,90</p>

                        <strong>Forma de pagamento:</strong>
                        <p>À vista</p>

                        <strong>Forma de entrega:</strong>
                        <p>T10 - R$10,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>Cliente:</strong>
                        <p>Darlan Paz</p>

                        <strong>Valor da venda:</strong>
                        <p>R$ 24,90</p>

                        <strong>Forma de pagamento:</strong>
                        <p>À vista</p>

                        <strong>Forma de entrega:</strong>
                        <p>T10 - R$10,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                </ul>
        </div>
    );
};