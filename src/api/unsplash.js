import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 02e0b1bdec7c231c7c589196b67488c42f25e0ef1445a9c3213234ad81db1d0b'
    }

});