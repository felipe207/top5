import axios from 'axios';

const Logout = async () => {
    try {
        // (Opcional) Faça uma chamada para a API de logout do Laravel Sanctum
        // await axios.post('/api/logout'); 

        // Limpe o token do armazenamento local
        localStorage.removeItem('token');

        // Redirecione o usuário para a página de login
        window.location.href = '/';
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
    }
};

export default Logout;
