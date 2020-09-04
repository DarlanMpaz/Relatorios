import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NovaVenda() {
    const [cliente, setCliente] = useState('');
    const [venda, setVenda] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [entrega, setEntrega] = useState('');

    const history = useHistory();

    const colaborador_id = localStorage.getItem('colaborador_id');

    async function handleNovaVenda(e) {
        e.preventDefault();

        const data = {
            cliente,
            venda,
            pagamento,
            entrega,
        };

        try {
            await api.post('/vendas', data, {
                headers: {
                    authorization: colaborador_id,
                }
            });

            history.push('/profile');
        } catch (err) {
            alert('Erro ao registrar venda, tente novamente.');
        }
    }

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

                <form onSubmit={handleNovaVenda}>
                    <input 
                        placeholder="Nome do dliente" 
                        value={cliente}
                        onchange={e => setCliente(e.target.value)}
                        />

                    <input 
                        placeholder="Valor da venda" 
                        value={venda}
                        onchange={e => setVenda(e.target.value)}
                        />

                    <label htmlFor="forma-pgto">Forma de pagamento</label>
                    <select name="forma-pgto"
                        value={pagamento}
                        onchange={e => setPagamento(e.target.value)}
                        >
                        <option value="avista">À vista</option>
                        <option value="aprazo">À prazo</option>
                        <option value="cartao">Cartão</option>
                    </select>

                    <label htmlFor="forma-entrega">Forma de entrega</label>
                    <select name="forma-entrega"
                        value={entrega}
                        onchange={e => setEntrega(e.target.value)}
                        >
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