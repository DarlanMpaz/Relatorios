import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NovaVenda() {
    return(
        <div className="novaVenda-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Nova venda</h1>
                    <p>Preencha os campos ao lado para registrar uma nova venda. </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16" color="#c62430" />
                        Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome do dliente" />
                    <input placeholder="Valor da venda" />
                    <label htmlFor="forma-pgto">Forma de pagamento</label>
                    <select name="forma-pgto">
                        <option value="avista">À vista</option>
                        <option value="aprazo">À prazo</option>
                        <option value="cartao">Cartão</option>
                    </select>
                    <label htmlFor="forma-entrega">Forma de entrega</label>
                    <select name="forma-entrega">
                        <option value="t5">T5 - R$5,00</option>
                        <option value="t10">T10 - R$10,00</option>
                        <option value="t15">T15 - R$15,00</option>
                    </select>
                  
                    <button className="button" type="submit">Registrar venda</button>
                </form>
            </div>
        </div>
    );
};