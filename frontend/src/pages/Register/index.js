import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
        };

        try {
            const response  = await api.post('/colaboradores', data);
            alert(`Seu ID de acesso: ${ response.data.id }`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastro</h1>
                    <p>Solciite seu acesso preenchendo o formulário. <br/>
                    Você receberá por e-mail um código de acesso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#c62430" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input placeholder="Seu nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}/>

                    <input type="email" placeholder="Seu e-mail"
                        value={email}
                        onChange={e =>
                        setEmail(e.target.value)} />

                    <input type="phone"
                        placeholder="Seu whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} />

                    <button className="button" type="submit">Solcitar acesso</button>
                </form>
            </div>
        </div>
    );
}