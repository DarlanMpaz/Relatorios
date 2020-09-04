/**REACT */
import React, { useState } from 'react';
/**REACT ROUTER DOM*/
import { Link, useHistory } from 'react-router-dom';
/**REACT ICONS*/
import { FiArrowLeft } from 'react-icons/fi';
/**API*/
import api from '../../services/api';
/**STYLE */
import './styles.css';
/**IMAGE */
import logoImg from '../../assets/logo.png';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();

    /**HANDLE REGISTER */
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

            history.push('/profile');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    /**JSX */
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastro</h1>
                    <p>Preencha o formulário ao lado para cadastrar um novo usuário.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16" color="#c62430" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input placeholder="Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}/>

                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e =>
                        setEmail(e.target.value)} />

                    <input type="phone"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} />

                    <button className="button" type="submit">Solcitar acesso</button>
                </form>
            </div>
        </div>
    );
}