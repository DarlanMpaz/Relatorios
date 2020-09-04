import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Profile() {
    const [vendas, setVendas] = useState([]);

    const history = useHistory();

    const colaborador_id = localStorage.getItem('colaborador_id');
    const colaborador_name = localStorage.getItem('colaborador_name');

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: colaborador_id,
            }
        }).then(response => {
            setVendas(response.data);
        })
    }, [colaborador_id]);

    //DELETAR
    async function handleDeleteVenda(id) {
        try {
            await api.delete(`vendas/${id}`, {
                headers: {
                    authorization: colaborador_id,
                }
            });

            setVendas(vendas.filter(venda => venda.id !== id));

        } catch (err) {
            alert('Erro ao deletar a venda, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Bem vindo(a), {colaborador_name}</span>
                <Link className="button" to="/vendas/nova">Registrar nova venda</Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#c62430" />
                </button>

            </header>

            <h1>Vendas registradas - <span>02/09/2020</span></h1>
                <ul>
                    {vendas.map(venda => (
                    <li key={venda.id}>
                        <strong>Cliente:</strong>
                        <p>{venda.cliente}</p>

                        <strong>Valor da venda:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(venda.venda)}</p>

                        <strong>Forma de pagamento:</strong>
                        <p>{venda.pagamento}</p>

                        <strong>Forma de entrega:</strong>
                        <p>{venda.entrega}</p>

                        <button onClick={() => handleDeleteVenda(venda.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    ))}
                </ul>
        </div>
    );
};