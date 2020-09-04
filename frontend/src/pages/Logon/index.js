/**REACT */
import React, {useState} from 'react';
/**REACT ROUTER DOM*/
import { Link, useHistory } from 'react-router-dom';
/**REACT ICONS*/
import { FiLogIn } from 'react-icons/fi';
/**API */
import api from '../../services/api';
/**STYLES */
import './styles.css';
/**IMAGENS */
import logonImage from '../../assets/vendas.png';
import logoImg from '../../assets/logo.png';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    /**HANDLE */
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/session', {id});

            localStorage.setItem('colaborador_id', id);
            localStorage.setItem('colaborador_name', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    /**JSX */
    return (
        <div className="logon-container">

            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form onSubmit={handleLogin}>

                    <h1>Bem vindo, faça seu login.</h1>

                    <input 
                        placeholder="Seu código"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />

                    <button className="button" type="submit">Entrar</button>

                </form>

            </section>

            <img src={logonImage} alt="Logon" />
        </div>
    );
}