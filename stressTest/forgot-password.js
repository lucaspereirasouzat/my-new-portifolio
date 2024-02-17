import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    stages: [
        { duration: '10s', target: 100 },
        { duration: '20s', target: 100 },
        { duration: '30s', target: 0 },
    ],
};

export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            origin: 'https://lucas.dashboard.you2sales.com.br'
        },
    };
    const payload = JSON.stringify({ "username": `v32rv180l@mozmail.com`, "password": "Es'9fT%'p)n=p.T", "country": "" });
    const res = http.post('https://api.you2sales.com/auth/forgot-password', payload, params);
    check(res, { 'status was 200': (r) => r.status == 200 });
    console.log(res);
    sleep(1);
}
